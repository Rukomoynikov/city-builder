var gulp = require('gulp');
var rename = require('gulp-rename');
var react = require('gulp-react');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');

var paths = {
    DEST : "./dist",
    SRC : "./src"
}

gulp.task("transform", function(){
    'use strict';
    gulp.src(paths.SRC + '/app/*.jsx')
        .pipe(react())
        .pipe(rename(function(file){
            file.extname = ".js"
        }))
        .pipe(gulp.dest(paths.DEST + '/app/'))
    gulp.src(paths.SRC + '/app/*.ts')
        .pipe(ts())
        .pipe(rename(function(file){
            file.extname = ".js"
        }))
        .pipe(gulp.dest(paths.DEST + '/app/'))
});

gulp.task('jade', function(){
    gulp.src(paths.SRC + "/*.jade")
        .pipe(jade({
            pretty : true
        }))
        .pipe(gulp.dest(paths.DEST))
})

gulp.task('stylus', function(){
    gulp.src(paths.SRC + "/css/*.styl")
        .pipe(stylus())
        .pipe(gulp.dest(paths.DEST + "/css/"))
})

gulp.task('copyRequiredFiles', function(){
    gulp.src(['./node_modules/react/dist/react.min.js', './node_modules/react-dom/dist/react-dom.min.js'])
})

gulp.task('watch', function(){
    // APP
    gulp.watch(paths.SRC + '/app/*.jsx', ['transform']);
    gulp.watch(paths.SRC + '/*.jade', ['jade']);
    gulp.watch(paths.SRC + '/css/*.styl', ['stylus']);
})

gulp.task('default', ['transform', 'jade', 'stylus', 'watch'])
