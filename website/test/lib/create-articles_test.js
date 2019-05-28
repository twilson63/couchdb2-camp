const test = require('tape')
const rewire = require('rewire')

const createArticlesHOF = rewire('../../lib/create-articles')

test('create articles using the Post component', t => {
  createArticlesHOF.__set__('fs', {
    writeFileSync: (dest, data) => {
      t.ok(/<h1 id="hello-world">Hello World<\/h1>/.test(data), 'output contains content')
    }
  })

  const pkg = {meta: {title: 'Blog'}}
  const dist = 'foo'
  const articles = [{ID: 'foo', title: 'Foo', __content: '# Hello World'}]
  const createArticles = createArticlesHOF(pkg)(dist)
  createArticles(articles)
  t.end()

})
