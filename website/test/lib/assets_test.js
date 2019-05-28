const test = require('tape')
const rewire = require('rewire')

const copyAssetsHOF = rewire('../../lib/assets')

test('copy assets from src to target directory', t => {
  t.plan(5)  
  
  copyAssetsHOF.__set__('shell', {
    mkdir: (args, dir) => {
      t.equals(args, '-p', 'mkdir called with recursive args')
      t.equals(dir,'foo/assets', 'mkdir called with new directory')
    },
    cp: (args, src, target) => {
      t.equals(args, '-rf', 'called cp with recursive args')
      t.equals(src, './content/assets', 'called cp with correct src')
      t.equals(target, './foo', 'called cp with correct target')
    }
  })


  const copyAssets = copyAssetsHOF('foo')
  copyAssets()

})

