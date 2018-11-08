const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-rimraf');


// remove unused css
gulp.task('clean', [], function() {
  console.log("Clean all files in build folder");
  return gulp.src("src/css/*", { read: false })
  .pipe(clean());
});

// compile sass
gulp.task('sass', ['clean'], function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// concat & minify js
gulp.task('minifyJS', function(){
  console.log('javascript has successfully concat and minified');
  return gulp.src(['src/js/$.js', 'src/js/languages.js', 'src/js/menu.js', 'src/js/swiper-init.js', 'src/js/detail-article.js', 'src/js/scroll.js', 'src/js/search.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('src/js'))
  .pipe(gulp.dest('dist/js'));
});

// watch & serve
gulp.task('serve', ['sass', 'minifyJS'], function(){
  browserSync.init({
    server: './src'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*html']).on('change', browserSync.reload);
  gulp.watch(['src/js/*js'], ['minifyJS']).on('change', browserSync.reload);
});

// default
gulp.task('default', ['serve']);

// export
// html
gulp.task('copyHTML', function(){
  gulp.src('src/*html')
  .pipe(gulp.dest('dist/'));
});

// css
gulp.task('copyCSS', function(){
  gulp.src('src/css/*')
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'));
});

// export & minify css
gulp.task('minifyCSS', function(){
  gulp.src('src/css/*')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'));
});

// images
gulp.task('copyImages', function(){
  gulp.src('src/images/*')
  .pipe(gulp.dest('dist/images/'));
});

// html
gulp.task('copyAJAX', function(){
  gulp.src('src/ajax/*')
  .pipe(gulp.dest('dist/ajax/'));
});

// export
gulp.task('export', ['copyHTML', 'copyCSS', 'minifyCSS', 'copyImages', 'minifyJS', 'copyAJAX']);