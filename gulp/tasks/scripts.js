module.exports = function(){
    $.gulp.task('scripts', function(){
        return $.gulp.src('src/scss/style.scss')
            .pipe($.gulpPlugins.plumber())
            .pipe($.gulpPlugins.sourcemaps.init())
            .pipe($.gulpPlugins.sass())
            .pipe($.gulpPlugins.autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe($.gulpPlugins.csso())
            .pipe($.gulpPlugins.rename('style.min.css'))
            .pipe($.gulpPlugins.sourcemaps.write(''))
            .pipe($.gulp.dest('build/css'))
            .pipe($.gulp.browserSync.stream());
    });
};
