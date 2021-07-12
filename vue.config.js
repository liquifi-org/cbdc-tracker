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
        target: 'https://cbdc.factory.bcgp.io/api',
        // target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' }
      },
      '/images': {
        target: 'https://cbdc.factory.bcgp.io/images',
        pathRewrite: { '^/images': '' }
      }
    }
  }
}
