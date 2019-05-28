const test = require('tape')

const templateEOF = require('../../lib/template')

test('create html template with meta data', t => {
  const template = templateEOF({meta: {title: 'Foo Bar'}})
  const html = template('', '<h1>Hello World</h1>')
  t.ok(/<title>Foo Bar<\/title>/.test(html), 'successfully changed the title')
  t.end()
})

test('create html template should take pkg object', t => {
  try {
    const template = templateEOF('Foo Bar')
    const html = template('', '<h1>Hello World</h1>')
  } catch (err) {
    t.equals(err.message, 'templateEOF takes an object for pkg param', 'checks for type and throws error')
  }
  t.end()
})

