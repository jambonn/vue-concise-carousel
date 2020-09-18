const marked = require('marked')
const Prism = require('prismjs')

module.exports = {
  pages: {
    index: {
      entry: './demo/main.js',
      template: './demo/template.html',
      title: 'Vue Concise Carousel with True SSR Written for Jambon',
    },
  },
  publicPath: '.',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
          return Prism.highlight(code, Prism.languages[lang], lang)
        },
        gfm: true,
      })
  },
  configureWebpack: {
    devtool: 'source-map',
    output: {
      libraryExport: 'default',
    },
  },
  css: { extract: true },
}
