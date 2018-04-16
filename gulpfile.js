var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    cleanCSS       = require('gulp-clean-css'),
    autoprefixer   = require('gulp-autoprefixer');

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost",
        notify: false
    });
});
// will compille styles in dark and light folders
gulp.task('sass', function () {
    return gulp.src('admin/view/stylesheet/d_admin_style/**/styles.scss')
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('admin/view/stylesheet/d_admin_style/'))
        .pipe(browserSync.reload({stream: true}));
});
// Наблюдение за файлами
gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('admin/view/stylesheet/d_admin_style/themes/**/styles.scss', ['sass']);
    gulp.watch('admin/view/stylesheet/d_admin_style/core/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);