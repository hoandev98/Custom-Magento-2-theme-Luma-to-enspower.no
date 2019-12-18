var gulp = require('gulp');
var sass = require('gulp-sass');
// var wait = require('gulp-wait');
var livereload = require('gulp-livereload');
//var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-theme', function(){
  return gulp.src('app/design/frontend/phpHoan/luMaFashion_childTheme/web/css/netpower.scss')
  	//.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})) //expanded, nested, compact, compressed
  	//.pipe(sourcemaps.write())
    .pipe(gulp.dest('app/design/frontend/phpHoan/luMaFashion_childTheme/web/css/'))
    .pipe(gulp.dest('pub/static/frontend/phpHoan/luMaFashion_childTheme/nb_NO/css/'))
    .pipe(livereload());
});

// gulp.task('sass-backend', function(){
//   return gulp.src('app/design/adminhtml/Netpower/backend/web/css/custom.scss')
//   	//.pipe(sourcemaps.init())
//     .pipe(sass({outputStyle: 'compressed'})) //expanded, nested, compact, compressed
//   	//.pipe(sourcemaps.write())
//     .pipe(livereload())
//     .pipe(gulp.dest('app/design/adminhtml/Netpower/backend/web/css/'))
//     .pipe(gulp.dest('pub/static/adminhtml/Netpower/backend/en_US/css/'));
// });

gulp.task('watch', function(){
    livereload.listen();
	  gulp.watch('app/design/frontend/phpHoan/luMaFashion_childTheme/web/css/scss/**/*',gulp.parallel('sass-theme'));
	  // gulp.watch('app/design/adminhtml/Netpower/backend/web/css/scss/**/*', ['sass-backend']);
});

gulp.task('default', gulp.parallel('sass-theme',  'watch'));