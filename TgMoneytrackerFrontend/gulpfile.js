var gulp = require('gulp');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');

// Run webpack
gulp.task('webpack', function () {
    return gulp.src('src/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        root: 'dist'
    });
});

gulp.task('default', ['webpack', 'webserver']);