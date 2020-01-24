module.exports = function(){
    $.gulp.task('images', function(){
        return $.gulp.src('src/assets/img/**/*.{jpg,png,svg')
            .pipe($.gulp.dest('build/img'));
    });
};
