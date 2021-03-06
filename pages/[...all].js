import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css';
import { useRouter } from 'next/router'
import { faCaretRight, faSearch, faFilePdf, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import matter from 'gray-matter';
import math from 'remark-math'

import TeX from '@matejmazur/react-katex';

const gfm = require('remark-gfm')

const renderers = {
    inlineMath: ({value}) => <TeX math={value} />,
    math: ({value}) => <TeX block math={value} />,
    text: ({value}) => {
        // URL Renderer
        let v = value.replace(/\[\[\w*?]]/gi, function(x) {
            let docPointer = x.slice(2, -2);
            if (docPointer) {
                let url = `./${docPointer}`;
                return `<a href=${url} class="wikilink text-red-600 hover:text-red-800 transition">[[${docPointer}]]</a>`;
            } else {
                console.log(`Cannot parse , returning...`);
                return x;
            }
        });
        return <span dangerouslySetInnerHTML={{__html: v}}></span>
    }
}

const PageRenderer = () => {
    const router = useRouter()

    if (router.query.all !== undefined) {
        let course = router.query.all[0];
        let note = router.query.all[1];

        const file = require(`../public/source/${course}/${note}.md`).default;
        let theFile = matter(file)
        //console.log((matter(require(`../../KBBackup3/${course}/${note}.md`).default)).content)

        return (<>
            <span className="sticky top-0 z-40 flex justify-between block inline-block w-full max-w-full p-4 text-xl font-bold text-red-500 bg-gray-100 shadow-lg cursor-pointer nowrap whitespace-nowrap" onClick={()=>{router.push("/")}}>Taproot <span style={{fontWeight: 500, textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", marginLeft: 15}}>{theFile.data.title}</span></span>
            <div className="content max-w-screen-lg">
                <div className="w-32 actionrow">
                    <a className="actionrow-button" href={`/`} ><FontAwesomeIcon icon={faHome}/></a>
                    <a className="actionrow-button" href={`https://github.com/SkoolNotes/Taproot/raw/main/${course}/${note}.pdf`} ><FontAwesomeIcon icon={faFilePdf} /></a>
                    <a className="actionrow-button" href={`/browse`}><FontAwesomeIcon className="actionrow-button" icon={faSearch} /></a>
                </div>
                <div className="datarow">
                    <span className="datarow-author">{theFile.data.author ? theFile.data.author : "Taproot"}</span> | <span className="datarow-course"><span className="mr-3">{theFile.data.course}</span><span className="datarow-back"><a href={`./${theFile.data.source}`} className="text-red-500 hover:text-red-800 transition" style={{display: theFile.data.source?"inline":"none"}}>[[{theFile.data.source}]]</a><FontAwesomeIcon icon={faCaretRight} style={{transform: "translateY(2px)", margin: "0 6px", display: theFile.data.source?"inline":"none"}}/><a href={`./${note}`} className="text-red-500 hover:text-red-800 transition">[[{note}]]</a></span></span>
                </div>
                <ReactMarkdown plugins={[gfm, math]} children={theFile.content} renderers={renderers}/>
            </div>
        </>)
    } else {
        return null;
    }
}

export default PageRenderer
