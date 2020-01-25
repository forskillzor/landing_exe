module.exports = function(){
    $.gulp.task('assets', function(){
        return $.gulp.src([
            'src/assets/fonts/**/*.{woff,woff2}',
            'src/assets/img/**',
            'src/assets/*.html'
        ],{
            base: './src/assets'
        })
            .pipe($.gulp.dest('build'));
    });
};
