module.exports = function(){
    $.gulp.task('html', function(){
        return $.gulp.src('src/assets/*.html')
            .pipe($.gulp.dest('build'))
            .pipe($.browserSync.stream())
            .on('end', $.browserSync.reload);
    });
};
