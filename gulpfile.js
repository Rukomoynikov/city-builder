var gulp = require('gulp');
var rename = require('gulp-rename');
var react = require('gulp-react');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

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

gulp.task('watch', function(){
    // APP
    gulp.watch(paths.SRC + '/app/*.jsx', ['transform']);
    gulp.watch(paths.SRC + '/*.jade', ['jade']);
    gulp.watch(paths.SRC + '/css/*.styl', ['stylus']);
})

gulp.task('default', ['transform', 'jade', 'stylus', 'watch'])
