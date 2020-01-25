module.exports = function(){
    $.gulp.task('imagemin', function(){
        return $.gulp.src('build/img/**/*.{jpg,png,svg')
            .pipe($.plugins.imagemin([
                $.plugins.imagemin.mozjpeg({progressive: true}),
                $.imageminJpegRecompress({
                    loops:5,
                    min: 65,
                    max: 70,
                    quality: 'medium'
                }),
                $.plugins.imagemin.optipng({optimizationLevel: 3}),
                $.pngquant({quality: '65-70', speed: 5}),
                $.plugins.imagemin.svgo()
            ]))
            .pipe($.gulp.dest('build/img'));
    });
};
