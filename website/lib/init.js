const shell = require('shelljs')

/**
 * initBuild
 *
 * Removes deploy directory and creates
 * the deploy directory, this will clean 
 * out any non supported files
 *
 * if files you place in the dist directory 
 * are being deleted use the /content/assets 
 * directory
 * 
 * @param {string} dir - destination directory
 *
 */
module.exports = (dir='dist') => () => {
  if (typeof dir !== 'string') throw new Error('initHOF only accepts a string as an argument type')
  shell.rm('-rf', dir)
  shell.mkdir(dir)
}
