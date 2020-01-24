module.exports = function(){
    $.gulp.task('imagemin', function(){
        return $.gulp.src('build/img/**/*.{jpg,png,svg')
            .pipe($.gulpPlugins.imagemin([
                $.gulpPlugins.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({
                    loops:5,
                    min: 65,
                    max: 70,
                    quality: 'medium'
                }),
                $.gulpPlugins.imagemin.optipng({optimizationLevel: 3}),
                $.pngquant({quality: '65-70', speed: 5}),
                $.gulpPlugins.imagemin.svgo()
            ]))
            .pipe($.gulp.dest('build/img'));
    });
};
