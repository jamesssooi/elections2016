// dependency imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var runSequence = require('run-sequence');
var series = require('stream-series');

// Watch files for changes
var watch = function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
};

// Default gulp action
gulp.task('default', watch());

// Process SASS files
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
});

/*
 *
 * 	BUILD SYSTEM
 * 
 */

// Build project
gulp.task('build', function(callback) {
	runSequence('clean', ['sass-build', 'html-transfer', 'assets-transfer'], callback);
})

// Build SCSS files
gulp.task('sass-build', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'))
});

// Transfer html files
gulp.task('html-transfer', function() {
	return gulp.src('src/**/*.+(html|htm|php)')
		.pipe(gulp.dest('dist'))
});

// Transfer assets
gulp.task('assets-transfer', function() {
	return gulp.src('src/assets/**/*.+(png|gif|jpg|svg|eot|ttf|otf)')
		.pipe(gulp.dest('dist/assets'))
});

// Clean dist folder
gulp.task('clean', function() {
	del('dist');
})