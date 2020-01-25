module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: 'build/'
        });

        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('scss'));
        $.gulp.watch('src/assets/**/*.html', $.gulp.series('html'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/assets/img/**/*.{png,jpg,svg}', $.gulp.series('images'));
    })
};
