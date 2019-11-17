//<== Plugins ==>
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const pipeline = require('readable-stream').pipeline;
const uglify = require('gulp-uglify');
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
	    cascade: true
	 }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
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

    gulp.watch('./scss/**/*.scss', compScss)
    gulp.watch('./css/**/*.css', styles)
    gulp.watch('./js/**/*.js', scripts)
    gulp.watch('./*.html').on('change', browserSync.reload);
}

//<== Functions ==>
//---------------------------------------------------
//<== Tasks ==>

gulp.task('styles', gulp.series(compScss, gulp.parallel(styles, scripts)));
gulp.task('scr', scripts);
gulp.task('watch', watch);

//<== Tasks ==>