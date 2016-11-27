var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './app/gulp/templates/sprites.css'
        }
      }
    }
  }
}

//清空之前的svg & css，避免之後新增icon一直增加檔案
gulp.task('beginClean', function(){
  return del(['./app/temp/sprites', './app/assets/images/sprites']);
})

//組合sprite.svg
gulp.task('createSprite',['beginClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/sprites/'));
})

gulp.task('copySvg', ['createSprite'], function(){
  return gulp.src('./app/temp/sprites/css/**/*.svg')
             .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySprite', ['createSprite'], function(){
  return gulp.src('./app/temp/sprites/css/*.css')
             .pipe(rename('_sprite.css'))
             .pipe(gulp.dest('./app/assets/styles/modules'));
})

gulp.task('endClean', ['copySvg', 'copySprite'], function(){
  return del('./app/temp/sprites');
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySvg', 'copySprite', 'endClean']);