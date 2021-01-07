import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css';
import { useRouter } from 'next/router'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
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
                return `<a href=${url} class="text-red-600 hover:text-red-800 transition">[[${docPointer}]]</a>`;
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

        const file = require(`../public/${course}/${note}.md`).default;
        let theFile = matter(file)
        //console.log((matter(require(`../../KBBackup3/${course}/${note}.md`).default)).content)

        return (<>
            <span className="sticky block shadow-lg font-bold p-4 text-red-500 text-xl top-0 bg-gray-100 z-40">Taproot <span style={{float: "right", fontWeight: 500}}>{theFile.data.title}</span></span>
            <div className="content">
                <div className="datarow">
                    <span className="datarow-author">{theFile.data.author}</span> | <span className="datarow-course">{theFile.data.course}<span className="datarow-back"><a href={`./${theFile.data.source}`} class="text-red-500 hover:text-red-800 transition" style={{display: theFile.data.source?"inline":"none"}}>[[{theFile.data.source}]]</a><FontAwesomeIcon icon={faCaretRight} style={{transform: "translateY(2px)", margin: "0 6px", display: theFile.data.source?"inline":"none"}}/><a href={`./${note}`} class="text-red-500 hover:text-red-800 transition">[[{note}]]</a></span></span>
                </div>
                <ReactMarkdown plugins={[gfm, math]} children={theFile.content} renderers={renderers}/>
            </div>
        </>)
    } else {
        return null;
    }
}

export default PageRenderer
