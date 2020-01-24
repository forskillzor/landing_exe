module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src('img/**/*.svg')
            .pipe($.gulpPlugins.svgmin({
                js2svg:{
                    pretty: true
                }
            }))
            .pipe($.gulpPlugins.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parseOptions: {xmlMode: true}
            }))
            .pipe($.gulpPlugins.replace('&gt;', '>'))
            // build svg sprite
            .pipe($.gulpPlugins.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('build/img'))
    });
};
