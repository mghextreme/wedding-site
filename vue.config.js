module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://www.matiaseaniele.com/'
    : '/',
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Save the Date - Matias e Aniele'
      return args
    })
  }
}
