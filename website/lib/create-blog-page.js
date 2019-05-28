require('svelte/register')
const fs = require('fs')
const createTemplate = require('./template')

const Blog = require('../components/Blog.svelte').default

const createPage = (Component, props, dest, pkg) => {
  const template = createTemplate(pkg)
  const { html, head, css } = Component.render(props)
  fs.writeFileSync(dest, template(head, html, css.code))
}

/**
 * createBlogPage
 *
 * creates a blog page using the blog svelte component
 * 
 * This function is a manually curried function that
 * takes a pkg object, then distribution directory,
 * finally a list of articles to display on the 
 * blog component.
 */
module.exports = pkg => dist => articles => {
  const targetPathname = name => `./${dist}/${name}.html`
  createPage(Blog, { meta: pkg.meta, articles}, targetPathname('index'), pkg)
  return articles
}
