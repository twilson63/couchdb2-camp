const { pathOr } = require('ramda')

/**
 * template
 *
 * basic html template to generate static html pages
 *
 * @param {Object} pkg - should contain meta object with title
 *
 */
module.exports = (pkg={meta: {title: 'Example Blog'}}) => { 
  if (typeof pkg !== 'object') { throw new Error('templateEOF takes an object for pkg param') }
  return (head='', html='<h1>Hello World</h1>', css='') => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <title>${pathOr('Blog', ['meta', 'title'], pkg)}</title>
    ${head}
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${html}
    <script src="https://cdn.jsdelivr.net/npm/hls.js@0.8.2"></script>
  </body>
</html>`
}


