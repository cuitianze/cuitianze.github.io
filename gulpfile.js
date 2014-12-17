/**
 * Created by bluesky on 14-12-15.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var obfuscate = require('gulp-obfuscate');


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

gulp.task('obfuscate', function() {
    gulp.src('js/index.js')
      .pipe(obfuscate({replaceMethod: obfuscate.ZALGO }))
      .pipe(gulp.dest('混淆版/index2.js'));
});

gulp.task('default', ['watch', 'obfuscate']);