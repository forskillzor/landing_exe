global.$ = {
    gulp: require('gulp'),
    gulpPlugins: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageJpegCompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    path: {
        jquery: './js/jquery.js',
        js: './js/**/*.js'
    }
};
