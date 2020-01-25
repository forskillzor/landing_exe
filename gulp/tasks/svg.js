module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src('src/assets/img/**/*.svg')
            .pipe($.plugins.svgmin({
                js2svg:{
                    pretty: true
                }
            }))
            .pipe($.plugins.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parseOptions: {xmlMode: true}
            }))
            .pipe($.plugins.replace('&gt;', '>'))
            // build svg sprite
            .pipe($.plugins.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('build/img'))
    });
};
