module.exports = function(){
    $.gulp.task('assets', function(){
        return $.gulp.src([
            'src/assets/fonts/**/*.{woff,woff2}',
            'src/assets/img/**',
        ],{
            base: './src'
        })
            .pipe($.gulp.dest('build'));
    });
};
