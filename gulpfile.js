"use strict";

// Dependencies
var gulp = require('gulp');
var connect = require('gulp-connect');          // Run a local dev server
var open = require('gulp-open');                // open a url in a web browser
var browserify = require('browserify');         // Bundles js files
var reactify = require('reactify');             // Transforms React JSX to JS
var source = require('vinyl-source-stream');    // Use conventional text streams with gulp
var concat = require('gulp-concat');            // Concatenates files

// Default config
var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        ],
        images: './src/images/*',
        dist: './dist',
        mainJs: './src/main.js'
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

// Bundle react files
gulp.task('js', () => {
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', () => {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));

    // extra favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

// Watches changes in the html folder
gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);