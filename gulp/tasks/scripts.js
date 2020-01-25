const jsFiles = [
    $.path.jquery,
    $.path.js
]
module.exports = function(){
    $.gulp.task('scripts', function(){
        return $.gulp.src(jsFiles)
            .pipe($.plugins.plumber())
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.babel({presets: ['@babel/preset-env']}))
            .pipe($.plugins.concat('bundle.js'))
            .pipe($.plugins.uglify())
            .pipe($.plugins.rename('bundle.min.js'))
            .pipe($.plugins.sourcemaps.write(''))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.stream());
    });
};
