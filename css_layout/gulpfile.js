var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var run = require('run-sequence');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');

var fs = require('fs');
var http = require('http');

var isDev = process.argv.indexOf('-d') > -1 || process.env.DEV || true;

var paths = {
  destDir: 'build',
  destCSS: 'build/assets/css'
};

gulp.task('js-bundle', function (cb) {
  var wpOpt = require('./webpack.config.js');

  delete wpOpt.devtool;

  wpOpt.plugins.push(new webpack.optimize.UglifyJsPlugin());
  wpOpt.plugins.push(new webpack.optimize.OccurenceOrderPlugin());

  webpack( wpOpt, function (err, stats) {
    if (err) {
      console.log( 'Bundle Error: ', err.stack );
    }

    cb();
  });
});

gulp.task('copy', function () {
  return gulp.src([ 'app/index.html', 'app/assets/**/*' ], { base: 'app' })
    .pipe( gulp.dest(paths.destDir) );
});

gulp.task('clean', function (cb) {
  del(['build/*'], cb);
});

gulp.task('dev', ['copy'], function () {
  var wpOpt = require('./webpack.config.js');

  var options = wpOpt.devServer;

  var protocol = options.protocol || 'http';
  var host = options.host || 'localhost';
  var port = options.port || '8080';

  options.inline = options.inline || true;
  options.hot = options.hot || true;

  var devClient = [];

  if (options.inline) {
    devClient.push( require.resolve('webpack-dev-server/client') + '?' + protocol + '://' + host + ':' + port);
  }

  if (options.hot) {
    devClient.push( 'webpack/hot/dev-server');
  }

  [].concat(wpOpt).forEach(function (wpOpt) {
    if (typeof wpOpt.entry === 'object') {
      Object.keys(wpOpt.entry).forEach(function (key) {
        wpOpt.entry[key] = devClient.concat(wpOpt.entry[key]);
      });
    } else {
      wpOpt.entry = devClient.concat(wpOpt.entry);
    }
  });

  wpOpt.output.path = '/';
  wpOpt.context = process.cwd();

  if (options.hot) {
    wpOpt.plugins.push(new HotModuleReplacementPlugin());

  }

  var s = new WebpackDevServer( new webpack(wpOpt), options)
    .listen(port, host, function (err) {
      if (err) {
        throw err;
      }

      console.log(protocol + '://' + host + ':' + port);
      console.log('webpack result is served from ' + options.publicPath);
      console.log('content is served from ' + options.contentBase);
    });
});

gulp.task('default', ['dev']);

gulp.task('build', ['clean'], function (cb) {
  run([ 'js-bundle', 'copy' ], cb);
})
