const shell = require('shelljs')


/**
 * copy Assets
 *
 * copy any asset files from the content assets folder to the 
 * distribution folders assets folder
 * this will allow developers to link to assets using the
 * `/assets/myphoto.png` path, and it will resolve via 
 * source control viewing markdown and the deployed site.
 *
 * @param {string} dir - destination directory
 */
module.exports = (dir='dist') => () => {
  if (typeof dir !== 'string') throw new Error('dir should be a string')

  shell.mkdir('-p', `${dir}/assets`)
  shell.cp('-rf', './content/assets', `./${dir}`)
}

 
