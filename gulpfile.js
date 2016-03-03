var gulp   = require('gulp');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");

gulp.task('compass', function() {
  gulp.src('./assets/sass/*.scss')
    .pipe(compass({
      css: './assets/build/css',
      sass: './assets/sass',
      sourcemap: true, //compass 1.0 sourcemap
      style: 'compact'
    }))
    //.pipe(gulp.dest('./assets/build/css'));
});

gulp.task('global-compass', function() {
  gulp.src('./assets/sass/global/*.scss')
    .pipe(compass({
      css: './assets/build/global/css',
      sass: './assets/sass/global',
      //sourcemap: true,
      style: 'compact'
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/build/global/css'));
});

gulp.task('js', function() {
  return gulp.src('./assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./assets/build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/build/js/'))
    .pipe(notify({ message: 'js task complete' }));
});

gulp.task('global-js', function() {
  return gulp.src('./assets/js/global/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/build/global/js/'))
    .pipe(notify({ message: 'global js task complete' }));
});
