var gulp   = require('gulp');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");


gulp.task('css', function() {
  gulp.src('./assets/sass/**/*.scss')
    .pipe(compass({
      css: './assets/build/css',
      sass: './assets/sass',
      //sourcemap: true,
      style: 'compact'
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/build/css'))
    .pipe(notify({ message: 'css task complete' }));
});


gulp.task('js', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/build/js'))
    .pipe(notify({ message: 'js task complete' }));
});
