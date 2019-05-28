const pkg = require('./package.json')
const { pipe, pathOr } = require('ramda')
const dist = pathOr('dist', ['meta', 'target'], pkg)
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))
const chokidar = require('chokidar')

// **** require pipe functions ****
const initBuild = require('./lib/init')(dist)
const getContent = require('./lib/content')
const createBlogPage = require('./lib/create-blog-page')(pkg)(dist)
const createArticles = require('./lib/create-articles')(pkg)(dist)
const copyAssets = require('./lib/assets')(dist)


// pipeline
const build = pipe(
  initBuild,
  getContent,
  createBlogPage,
  createArticles,
  copyAssets
)


// if -w this run in watch mode
if (argv.w) {
  console.log('watching for changes...')
  // watch
  chokidar.watch(['./content', './components'], {ignored: /(^|[\/\\])\../}).on('change', (event, path) => {
    try {
      console.log('building site...')
      build()
      console.log('done.')
    } catch (err) {
      console.log(err.message)
    }
  })
} 
console.log('building site...')
build()



