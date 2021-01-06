import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { useRouter } from 'next/router'
import matter from 'gray-matter';
import math from 'remark-math'

const gfm = require('remark-gfm')

const renderers = {
    inlineMath: ({value}) => <Tex math={value} />,
    math: ({value}) => <Tex block math={value} />,
    text: ({value}) => {
        let v = value.replace(/\[\[\w*?]]/gi, function(x) {
            let docPointer = x.slice(2, -2);
            //console.log(docPointer);
            if (docPointer) {
                let url = `./${docPointer}`;
                return `<a href=${url} class="text-red-600">[[${docPointer}]]</a>`;
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

        return <ReactMarkdown plugins={[gfm, math]} children={theFile.content} renderers={renderers}/>
    } else {
        return null;
    }
}

export default PageRenderer
