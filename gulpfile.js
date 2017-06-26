"use strict";

// Dependencies
var gulp = require('gulp');
var connect = require('gulp-connect'); // Run a local dev server
var open = require('gulp-open'); // open a url in a web browser

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
gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Opens the default document on the dev server
gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({ url: config.devBaseUrl + ':' + config.port + '/' }));
});

// Copies any html files put to dist and reload web server
gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('default', ['html', 'open']);