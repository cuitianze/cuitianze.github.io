/**
 * Created by bluesky on 14-12-15.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');


var paths = {
    scss: ['scss/*.scss']
};

gulp.task('scss', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['watch', 'scss']);