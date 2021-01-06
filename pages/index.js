import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';

const gfm = require('remark-gfm')
const anotherFile = matter(require('../public/2020BIO101/KBhBIO101HumanDiseases.md').default)

export default function Home() {
  return (
      <>
          <span className="sticky block shadow-lg font-bold p-3 text-red-500 text-lg top-0 bg-gray-100 mb-2">Taproot</span>
          <ReactMarkdown plugins={[gfm]} children={anotherFile.content} />
      </>
  )
}
