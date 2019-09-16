var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

function css_style (done) {
	gulp.src('./scss/style.scss')
		.pipe(sass({
			outputStyle:'compressed'
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css/'));
	done();

}

gulp.task(css_style);