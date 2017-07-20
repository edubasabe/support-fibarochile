var gulp            =  require('gulp');
var sass            =  require('gulp-sass');
var uglify          =  require('gulp-uglify');
var gulpIf          =  require('gulp-if');
var autoprefixer    =  require('gulp-autoprefixer');
var browserSync     =  require('browser-sync');
var useref          =  require('gulp-useref');
var imagemin        =  require('gulp-imagemin');
var cache           =  require('gulp-cache');
var del             =  require('del');
var runSequence     =  require('run-sequence');
var cssnano         =  require('gulp-cssnano');
var sourcemaps      =  require('gulp-sourcemaps');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
//-- BrowserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

//-- Sass
gulp.task('sass', function() {
  return gulp.src('./app/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.reload({ stream:true }));
});


//-- Watch
gulp.task('watch', ['browserSync','sass'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.php', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});

//-- Useref
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('app/assets/js/**/*.js', uglify()))
    .pipe(gulpIf('app/assets/css/**/*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

//-- CopyJS
gulp.task('copyCSS', function () {
  return gulp.src('app/assets/css/*.css')
  .pipe(gulp.dest('dist/assets/css'));
});

//-- Images
gulp.task('images', function(){
  return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets/images'));
});

//-- Fonts
gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*.+(ttf|eot|otf|svg|woff|woff2)')
  .pipe(gulp.dest('dist/assets/fonts'));
});

//-- Clean
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//-- Run Sequence
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images'],
    callback
  );
});

//-- Default Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  );
});
