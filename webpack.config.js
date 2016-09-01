var path = require('path');

module.exports = {

  entry: ['./src/flagReducer.js'],

  output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'compiled.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [path.resolve(__dirname, '.')],
  },

};
