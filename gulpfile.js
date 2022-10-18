const gulp = require('gulp');
const less = require('gulp-less');

const copy = () => {
    gulp.src('./style.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
}

const listen = () => {
    gulp.watch('./style.less')
        .on('change', function() {
            copy();
        });
}

exports.default = listen;