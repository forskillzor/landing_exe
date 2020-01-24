const jsFiles = [
    $.path.jquery,
    $.path.js
]
module.exports = function(){
    $.gulp.task('scripts', function(){
        return $.gulp.src(jsFiles)
            .pipe($.gulpPlugins.plumber())
            .pipe($.gulpPlugins.sourcemaps.init())
            .pipe($.gulpPlugins.babel({presets: ['@babel/preset-env']}))
            .pipe($.gulpPlugins.concat('bundle.js'))
            .pipe($.gulpPlugins.uglify())
            .pipe($.gulpPlugins.rename('bundle.min.js'))
            .pipe($.gulpPlugins.sourcemaps.write(''))
            .pipe($.gulp.dest('build/js'))
            .pipe($.gulp.browserSync.stream());
    });
};
