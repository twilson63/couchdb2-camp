const yamlFront = require('yaml-front-matter')
const fs = require('fs')
const { filter, pipe, map } = require('ramda')

// pure functions
const isMarkdown = name => /.md$/.test(name)
const parseFrontmatter = name => {
  const md = fs.readFileSync('./content/' + name, 'utf-8')
  return yamlFront.loadFront(md)
}

/**
 * getContent
 *
 * gets the content from the ./content directory
 * parses it and then returns the content as 
 * an array of data.
 */
module.exports = () => {
  const files = fs.readdirSync('./content')
  return pipe(
    filter(isMarkdown),
    map(parseFrontmatter)
  )(files)
}
