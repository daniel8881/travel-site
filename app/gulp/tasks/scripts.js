var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../../../webpack.config');

gulp.task('scripts',['modernizr'], function(callback){
  webpack(config, function(err, stats){
    if(err){
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
})