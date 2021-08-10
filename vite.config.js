// vite.config.js
// you can also make a public folder and have it store any images
// not advise to put html in the public folder 
// the public folder is for anything that doesn't want any changes, and you want it with the dist.
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
