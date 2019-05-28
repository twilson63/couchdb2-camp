require('svelte/register')
const fs = require('fs')
const createTemplate = require('./template')
const marked = require('marked')
const { assoc, map } = require('ramda')

const Post = require('../components/Post.svelte').default

const createPage = (Component, props, dest, pkg) => {
  const template = createTemplate(pkg)
  const { html, head } = Component.render(props)
  fs.writeFileSync(dest, template(head, html))
}

/**
 * createArticles
 *
 */
module.exports = pkg => dist => articles => {
  const templatePathname = name => `./${dist}/${name}.html`
  
  const createArticle = article => {
    article = assoc('content', marked(article.__content), article)
    createPage(Post, { meta: pkg.meta, article }, templatePathname(article.ID), pkg)
  }
  return map(createArticle, articles)
}
