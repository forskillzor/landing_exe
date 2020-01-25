module.exports = function(){
    $.gulp.task('webp', function(){
        return $.gulp.src('build/img/**/*.{jpg,png}')
            .pipe($.plugins.webp({quality: 90}))
            .pipe($.gulp.dest('build/img'));
    });
};
