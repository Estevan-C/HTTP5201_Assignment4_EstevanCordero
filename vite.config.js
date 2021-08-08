// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'quality_assurance.html'),
        nested2: resolve(__dirname, 'security.html'),
        nested3: resolve(__dirname, 'bad_example.html')
      }
    }
  }
}
