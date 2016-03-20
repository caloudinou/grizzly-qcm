/**
 * @author Pascal Navière <pascalou@gmail.com>
 */

'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var rename      = require("gulp-rename");
var uglify      = require('gulp-uglify');
var cleancss    = require('gulp-clean-css');
var htmlmin     = require('gulp-htmlmin');



/**
 * concat all files sass
 */
gulp.task('concatSass',function(){
    
  return gulp.src(['app/scss/main.scss','app/components/**/*.scss'])
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('./app/scss/'));
    
});

/**
 * Convert Scss to css
 */
gulp.task('sass', function () {

  return gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app_prod/src/css/'));
    
});
/**
* minify and clean the file style.css
*/
gulp.task('cleanCss', function () {

  return gulp.src('app_prod/src/css/style.css')
      
    .pipe(sourcemaps.init())
    .pipe(cleancss(
          {debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            },
          {compatibility: 'ie8'}
      ))
    .pipe(sourcemaps.write())
    .pipe(rename({
    suffix: '.min'
    }))
    .pipe(gulp.dest('./app_prod/src/css/'));
    
});



/**
 * Concat all app js files into one file
 */
gulp.task('concatJs', function() {
    return gulp.src([
          'app/config/app_mapp.js',
          'app/components/**/module.*.namespace.js',
          'app/components/**/module.*.route.js',
          'app/components/controllers/*.js',
          'app/common/*.js',
          'app/app_start.js',
          'app/config/app_run.js',
          'app/config/app_default_route.js',
          'app/config/app_html5.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app_prod/src/js/'));
});


/**
 * Compress app.js and save it as app.min.js
 */
gulp.task('compressJs', function() {
    return gulp.src('app_prod/src/js/app.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('app_prod/src/js'));
});




/**
 * Compress html files
 */
gulp.task('compressHtml', function() {
    return gulp.src('./app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app_prod/src/views/'));
});

/**
 * Compile index.html files
 */
gulp.task('indexCompile', function() {
    return gulp.src(['app/sources/html/header.html','app/sources/html/section.html','app/sources/html/footer.html'])
    .pipe(concat('index.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app_prod/'));
});


gulp.task('init', function() {
    return gulp.src('app/.htaccess')
    .pipe(gulp.dest('app_prod'));
});


/**
 * Watch every scss / js modification and execute scss or js tasks
 */
gulp.task('watch', function () {
    gulp.watch(['./src/scss/*.scss','./app/**/*.scss'], ['concatSass','sass','cleanCss']);
    gulp.watch(['app/*.js', 'app/**/*.js'], ['concatJs','compressJs']);
    gulp.watch(['app/**/*.html'],['compressHtml', 'indexCompile']);
});
