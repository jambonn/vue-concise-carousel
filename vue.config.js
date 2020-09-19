module.exports = {
  pages: {
    index: {
      entry: './demo/main.js',
      template: './demo/template.html',
      title: 'Vue Concise Carousel is SSR and CSR friendly',
    },
  },
  publicPath: '.',
  configureWebpack: {
    devtool: 'source-map',
    output: {
      libraryExport: 'default',
    },
  },
  css: { extract: true },
}
