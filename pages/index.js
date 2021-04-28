import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';

const gfm = require('remark-gfm')

export default function Home() {
  return (
      <>
          <div className="h-full m-10">
              <div className="mt-5 content">

                  <h1 className="mr-3">Taproot</h1>
                  <div className="inline-block text-xs text-gray-500">(c) 2021 Houjun Liu, Huxley Marvit, Zachary Sayyah, Albert Huang, Dylan Wallace. </div>
                  <br />

                  Howdy 👋, welcome to Taproot. Take a look around, either <a href="https://github.com/skoolnotes/taproot" className="text-red-600 underline hover:text-red-400 transition-all">in person</a> or from our handy web portal, which you are currently at.


                  <br />
                  <br />

                  <h2>Philosophy</h2>

                  Zettelkasten, maybe. But basically, create a repository of knowledge that should be easy to refer back to and effective for relearning things. We strive to create atomic, self contained notes that link to other references. Think a more granular Wikipedia
                  <br />
                  <br />


                  <h2>Structure</h2>

                  At the moment, Taproot is organized by the course that each concept falls into. The project was started with Zettelkasten style IDs prefixed with "KB", but was soon moved to semantic naming. 

                  <br />
                  <br />


                  <hr />
              </div>
          </div>

      </>
  )
}
