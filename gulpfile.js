const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('js combine', () => {
    return gulp.src(['app/js/app.js','app/js/scripts/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/'));
});

gulp.task('watch', () => {
    gulp.watch('app/js/scripts/**/**', ['js combine']);
});