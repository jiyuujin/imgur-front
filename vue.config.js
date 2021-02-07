module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '': {
        target: process.env.VUE_APP_BASEURL,
        changeOrigin: true
      }
    }
  }
}
