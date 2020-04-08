//<== Plugins ==>
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const pipeline = require('readable-stream').pipeline;
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cssFiles = [
	'./css/style.css',
	'./css/media.css'
];
const ScssFiles = [
	'./scss/style.scss',
	'./scss/media.scss'
];
//<== Plugins ==>
//---------------------------------------------------
//<== Functions ==>

function compScss() {
	return gulp.src(ScssFiles)
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function styles() {
	return gulp.src(cssFiles)
	.pipe(autoprefixer({
		"overrideBrowserslist": [
			"last 25 version",
			"> 2%"
		  ],
	    cascade: false
	 }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(browserSync.stream())
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./css'));
}

function scripts() {
	return gulp.src('./js/build.js')
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
	});
	gulp.watch('./css/style.css', styles)
	gulp.watch('./scss/**/*.scss', compScss)
    gulp.watch('./js/**/build.js', scripts)
}

//<== Functions ==>
//---------------------------------------------------
//<== Tasks ==>

gulp.task('styles', gulp.series(compScss, gulp.parallel(styles, scripts)));
gulp.task('scr', scripts);
gulp.task('watch', watch);

//<== Tasks ==>