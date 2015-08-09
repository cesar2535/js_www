var Path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
  entry: {
    bundle: [ './app/js/index.js']
  },
  output: {
    path: Path.resolve(__dirname, './build'),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.less$/,
      exclude: [ /node_modules/ ],
      loader: 'style!css!less'
    }, {
      test: /.scss$/,
      exclude: [ /node_modules/ ],
      loader: 'style!css!sass'
    }]
  }
};
