const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/AutoTyping.js',
  output: {
    path: path.resolve('dist'),
    filename: 'AutoTyping.min.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};