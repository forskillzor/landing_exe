module.exports = function(){
    $.gulp.task('scss', function(){
        return $.gulp.src('src/scss/style.scss')
            .pipe($.plugins.plumber())
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.sass())
            .pipe($.plugins.autoprefixer())
            .pipe($.plugins.csso())
            .pipe($.plugins.rename('style.min.css'))
            .pipe($.plugins.sourcemaps.write(''))
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.stream());
    });
};
