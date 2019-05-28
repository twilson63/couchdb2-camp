const test = require('tape')
const rewire = require('rewire')

const initHOF = rewire('../../lib/init')

test('Test init build pipeline', t => {
  t.plan(2)
  initHOF.__set__('shell', {
    rm: (args, dir) => {
      t.equals(dir, 'foo', 'remove dir is called with directory name')
    }, 
    mkdir: (dir) => {
      t.equals(dir, 'foo', 'mkdir is called with directory name')
    }
  })
  const init = initHOF('foo')
  init()
})

test('init hof should only allow strings', t => {
  try {
    const init = initHOF(2)
    init()
  } catch (err) {
    t.equals(err.message, 'initHOF only accepts a string as an argument type', 'error message is properly thrown if string is not provided')
  }
  t.end()
})
