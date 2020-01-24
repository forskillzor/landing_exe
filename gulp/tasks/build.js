module.exports = function(){
    $.gulp.task('build', $.gulp.series('clean', 'assets', 'scss', 'scripts'));
};
