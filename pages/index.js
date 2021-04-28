import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';

const gfm = require('remark-gfm')

export default function Home() {
  return (
      <>
          <div className="h-full m-10">
              <div className="mt-5 content">

                  <h1 className="mr-3">Taproot</h1>

                  Howdy 👋, welcome to Taproot. Take a look around, either in person or from our handy web portal.
                  Philosophy

                  Zettelkasten, maybe. But basically, create a repository of knowledge that should be easy to refer back to and effective for relearning things. We strive to create atomic, self contained notes that link to other references. Think a more granular Wikipedia
                  Structure

                  At the moment, Taproot is organized by the course that each concept falls into. The project was started with Zettelkasten style IDs prefixed with "KB", but was soon moved to semantic naming. Some files are named according to the convention outlined here:

                  [[KBeMetaIndex]] @Exr0n
                  [[KBhMETAindex]] @Jemoka
              </div>
          </div>

      </>
  )
}
