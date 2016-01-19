var gulp   = require('gulp');
var compass = require('gulp-compass');


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