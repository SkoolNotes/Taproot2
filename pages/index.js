import ReactMarkdown from 'react-markdown'
import * as matter from 'gray-matter';

const gfm = require('remark-gfm')
const anotherFile = matter(require('../KBBackup3/2020BIO101/KBhBIO101HumanDiseases.md').default)

export default function Home() {
  return (
      <>
          <span className="block shadow-lg font-bold p-3 text-red-500 text-lg">Taproot</span>
          <ReactMarkdown plugins={[gfm]} children={anotherFile.content}>
          </ReactMarkdown>
      </>
  )
}
