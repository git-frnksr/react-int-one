"use strict";

// Dependencies
var gulp = require('gulp');
var connect = require('gulp-connect'); // Run a local dev server
var open = require('gulp-open'); // open a url in a web browser
var browserify = require('browserify'); // Bundles js files
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('viny-source-stream'); // Use conventional text streams with gulp

// Default config
var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

// Start a local dev server
gulp.task('connect', function() {
  connect.server({
      root: config.paths.dist,
      port: config.port,
      livereload: true
  });
});


// Opens the default document on the dev server
gulp.task('open', ['connect'], () => {
    gulp.src('./dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port }));
});

// Copies any html files put to dist and reload web server
gulp.task('html', () => {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// Watches changes in the html folder
gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'open', 'watch']);