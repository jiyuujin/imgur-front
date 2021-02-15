const path = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  },
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
