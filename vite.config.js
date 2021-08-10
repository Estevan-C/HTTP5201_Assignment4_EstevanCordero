// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'quality_assurance.html'),
        security: resolve(__dirname, 'security.html'),
        badexample: resolve(__dirname, 'bad_example.html')
      }
    }
  }
}
