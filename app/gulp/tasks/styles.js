var gulp = require('gulp');
var postcss = require('gulp-postcss');
//postcss plugin
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/main.css')
         .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
         .on('error', function(err){
          console.log(err.toString());
          this.emit('end');
         })
         .pipe(gulp.dest('./app/temp/styles'));
});