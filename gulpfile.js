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
var clean       = require('gulp-clean');
var bower       = require('gulp-bower');


/**
 * concat all files sass
 */
gulp.task('dev-concat-sass',function(){
    
  return gulp.src(['app/sources/scss/main.scss','app/components/**/*.scss'])
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('./app/sources/scss/'));
    
});

/**
 * Convert Scss to css
 */
gulp.task('build-scss-to-css', function () {

  return gulp.src('app/sources/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app_prod/src/css/'));
    
});
/**
* minify and clean the file style.css
*/
gulp.task('build-clean-css', function () {

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
gulp.task('build-concat-js', function() {
    return gulp.src([
          'app/config/app_mapp.js',
          'app/components/**/module.*.namespace.js',
          'app/components/**/controllers/*.js',
          'app/components/**/module.*.route.js',
          'app/app_start.js',
          'app/common/**/*.js',
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
gulp.task('build-compress-js', function() {
    return gulp.src('app_prod/src/js/app.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('app_prod/src/js'));
});


/**
 * copy translate json file
 */
gulp.task('build-copy-json-translation', function() {
    return gulp.src('app/translation/*.json')
    .pipe(gulp.dest('app_prod/src/translation/'));
});


/**
 * copy config json file
 */
gulp.task('build-copy-json-config', function() {
    return gulp.src('app/config/*.json')
    .pipe(gulp.dest('app_prod/src/config/'));
});



/**
 * Compress html files
 */
gulp.task('build-minify-html', function() {
    return gulp.src('./app/components/**/*.html')
    //.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app_prod/src/views/'));
});

/**
 * Compile index.html files
 */
gulp.task('build-index', function() {
    return gulp.src(['app/sources/html/header.html','app/sources/html/body.html','app/sources/html/footer.html'])
    .pipe(concat('index.html'))
    //.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app_prod/'));
});

/**
 * copy the htaccess
 */
gulp.task('build-init', function() {
    return gulp.src('app/.htaccess')
    .pipe(gulp.dest('app_prod'));
});
/**
 * launch bower install with gulp
 */
gulp.task('bower', function() {
  return bower();
});

/**
 * default task css
 */
gulp.task('default-css', ['dev-concat-sass','build-scss-to-css','build-clean-css']);

/**
 * default task html
 */
gulp.task('default-html', ['build-minify-html', 'build-index']);

gulp.task('build-copy-json',['build-copy-json-translation', 'build-copy-json-config']);

/**
 * this default task will launch all task of initialization
 */
gulp.task('default', function () {
    gulp.start('bower', 'build-init', 'default-css', 'build-concat-js', 'build-compress-js','build-copy-json', 'default-html');
});


/**
 * Watch every scss / js modification and execute scss or js tasks
 */
gulp.task('watch', function () {
    gulp.watch(['./src/scss/*.scss','./app/**/*.scss'], ['default-css']);
    gulp.watch(['app/*.js', 'app/**/*.js'], ['build-concat-js']);
    gulp.watch(['app/config/*.json','app/translation/*.json'], ['build-copy-json'])
    gulp.watch(['app/**/*.html'], ['default-html']);
});

/**
 * del the prod
 */
gulp.task('build-clean', function() {
    return gulp.src('app_prod').pipe(clean());
});