const path = require('path');

module.exports = {
  publicPath: '',
  outputDir: 'dist/ui',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'popup.html',
      title: 'Popup Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    options: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'options.html',
      title: 'Popup Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.js', '.vue', '.json'],
    },
  },
};
