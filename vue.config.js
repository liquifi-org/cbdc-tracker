module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/styles.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://preprod.cbdctracker.org/api',
        // target: 'https://cbdctracker.org/api',
        // target: 'http://localhost:8081/',
        pathRewrite: { '^/api': '' }
      },
      '/images': {
        target: 'https://cbdctracker.org/images',
        pathRewrite: { '^/images': '' }
      }
    }
  }
}
