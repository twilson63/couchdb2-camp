const test = require('tape')
const rewire = require('rewire')

const getContent = rewire('../../lib/content')

test('load markdown content from folder and parse front matter', t => {
  getContent.__set__('fs', {
    readdirSync: (dir) => {
      return fixtureListing()
    },
    readFileSync: (file, format) => {
      return `---
ID: foo
---
Hello World
`
    }
  })

  const results = getContent()

  t.deepEquals(results, [ { ID: 'foo', __content: '\nHello World\n' }, { ID: 'foo', __content: '\nHello World\n' } ])
  t.end()
})


function fixtureListing() {
  return ['file1.md', 'file2.md', 'file3.js']
}


