var gulp        = require('gulp');
var browserSync = require('browser-sync').create('Freedomvote');
var sass        = require('gulp-sass');

const reload = browserSync.reload;

var src =  {
  sass: ['src/sass/**/*.sass', 'src/sass/**/*.scss'],
  css:  'public',
  html: 'public/*.html'
}

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    console.log('test');
    return gulp.src(src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
