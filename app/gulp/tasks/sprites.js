var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var svg2png = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function(){
          return function(sprite, render){
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
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

gulp.task('createPngCopy',['createSprite'], function(){
  return gulp.src('./app/temp/sprites/css/*.svg')
             .pipe(svg2png())
             .pipe(gulp.dest('./app/temp/sprites/css'));
})

gulp.task('copySvg', ['createPngCopy'], function(){
  return gulp.src('./app/temp/sprites/css/**/*.{svg,png}')
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

gulp.task('icons', ['beginClean', 'createSprite','createPngCopy', 'copySvg', 'copySprite', 'endClean']);