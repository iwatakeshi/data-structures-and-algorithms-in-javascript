var 
    gulp      = require('gulp'),
		babel     = require('gulp-babel'),
		jshint    = require('gulp-jshint'),
		beautify  = require('gulp-jsbeautify'),
		jasmine   = require('gulp-jasmine'),
    maps      = require('gulp-sourcemaps'),
    config    = require('./config');

/* Backup the source in case of emergency */
gulp.task('backup', function(){
	return gulp.src('lib/**/**/*.js')
				.pipe(gulp.dest('.backup/'));
});

/* Restore the file in case of emergency */
gulp.task('restore', function(){
	return gulp.src('.backup/**/**/*.js')
				.pipe(gulp.dest('lib/'));
});

/* Formats the files */
gulp.task('beautify', ['backup'], function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(beautify(config.beautify))
    .pipe(gulp.dest('./lib'));
});

/* Checks the coding style and builds from ES6 to ES5 */
gulp.task('lib',['beautify'],function () {
  return gulp.src('./lib/**/**/*.js')
    .pipe(jshint(config.jshint))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(maps.init())
    .pipe(babel())
    .pipe(maps.write("./source maps/"))
    .pipe(gulp.dest('./dist'));
});

/* Watches for changes and applies the build task */
gulp.task('watch', function () {
  return gulp.watch('./lib/**/**/*.js', ['build']);
});

/* Runs tests */
gulp.task('jasmine', ['beautify','lib'],function () {
  return gulp.src('./tests/**/**/*.js')
    .pipe(jasmine());
});

gulp.task('default', ['backup','beautify', 'lib', 'watch']);

gulp.task('build', ['backup','beautify', 'lib', 'jasmine']);

gulp.task('test', ['jasmine']);