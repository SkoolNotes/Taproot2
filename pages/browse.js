import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter';

import Select from 'react-select';

const gfm = require('remark-gfm')

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const theme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: 'red',
        primary25: '#ffebeb',
    },
})

export default function Browse() {
  return (
      <>
          <div className="flex items-center justify-center w-screen h-full h-screen">
              <div className="w-1/3 mt-5">
                  <h1 className="inline-block mr-3">Taproot</h1>
                  <h2 className="inline-block mr-3">Browse</h2>
                  <Select options={options} theme={theme} placeholder="Select an option" />
              </div>
          </div>

      </>
  )
}
