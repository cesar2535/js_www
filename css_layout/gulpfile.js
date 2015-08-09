var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var del = require('del');
var run = require('run-sequence');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
