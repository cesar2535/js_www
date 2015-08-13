var Path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = {
  entry: {
    bundle: ['./app/js/index']
  },
  output: {
    path: Path.resolve(__dirname, './build'),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [ /node_modules/ ],
      loaders: [ 'react-hot', 'babel' ]
    }, {
      test: /\.less$/,
      exclude: [ /node_modules/ ],
      loader: 'style!css!less'
    }, {
      test: /\.scss$/,
      exclude: [ /node_modules/ ],
      loader: 'style!css!sass'
    }, {
      test: /\.styl$/,
      exclude: [ /node_modules/ ],
      loader: 'style!css!stylus'
    }]
  },
  resolve: {
    extension: ["", "js"]
  },
  plugins: [],

  devtool: 'eval',

  devServer: {
    contentBase: Path.resolve(__dirname, './build'),

    filename: '[name].js',
    publicPath: '/',
    outputPath: '/',

    hot: true,
    inline: true,

    protocol: 'http',
    host: 'localhost',
    port: 8080,

    quiet: true,
    noInfo: true,
    lazy: false,
    stats: { colors: true, cached: false, cachedAssets: false }
  }
};
