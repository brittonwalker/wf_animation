'use strict';

var uglify = require( 'gulp-uglify' );
var gulp = require('gulp');
var sass = require('gulp-sass');
var assign = require( 'lodash.assign' );
var	browserify = require( 'browserify' );
var	watchify = require( 'watchify' );
var	babel = require( 'babelify' );
var	notify = require( 'gulp-notify' );
var	source = require( 'vinyl-source-stream' );
var	sourcemaps = require( 'gulp-sourcemaps' );
var	buffer = require( 'vinyl-buffer' );
var	livereload = require( 'gulp-livereload' );

var config = {
    themePath: './',
    npmPath: '../../../node_modules'
  },
  customOpts = {
    entries: [config.themePath + '/js/main.js'],
    debug: true
  },
  opts = assign({}, watchify.args, customOpts),
  bundle = watchify(browserify(opts).transform(babel, {
    presets: ['es2015']
  }), {
    poll: 100
  });

gulp.task('bundle', function () {

  return bundle.bundle()
    .on('error', notify.onError(function (error) {
      return 'Error ' + error.message;
    }))
    .pipe(source('site.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.themePath + '/assets/js'))
    .pipe(livereload());

});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
//   gulp.watch('./js/app/**/*.js', './js/main.js')
// });

gulp.task( 'watch', function () {
  gulp.watch(['./js/app/*.js', './js/main.js'], ['bundle']);
  gulp.watch('./sass/**/*.scss', ['sass']);
} );

gulp.task( 'default', [ 'bundle', 'sass', 'watch' ] );
