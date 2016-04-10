var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
//watch есть по умолчанию, поэтому его можно не прописывать как переменную
//var watch = require('gulp-watch');
var plumber = require('gulp-plumber'); //отлавливает ошибки кода
// для его работы в таск с ошибками добавляется строка
// .pipe(plumber())

//если прописать в дефолтном таске все нужные команды, 
//то можно вызывать их выполнение командой gulp
//gulp.task('default', ['cssMin', 'jsUglify', 'watch']);

gulp.task('watch', function(){
	gulp.watch('./css/**/*.css', ['cssMin']);
	gulp.watch('./js/**/*.js', ['jsUglify']);
});
//объединяем и минимизируем файлы JS
gulp.task('jsUglify', function(){
	//объединяем и минимизируем файлы JS самописанные
	gulp.src(['./js/home_work_js_9_10_*.js', './js/grunt_sad.js'])
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('./dist'));
	//объединяем и минимизируем файлы JS бибилотек
	//в данной работе важен первым в файле файл jQuery
	gulp.src([
		'./js/libs/jquery-1.12.2.min.js',
		'./js/libs/jquery.s*.js'
		])
	.pipe(uglify())
	.pipe(concat('all.libs.min.js'))
	.pipe(gulp.dest('./dist'));
});
//объединяем файлы CSS
gulp.task('cssConcat', function(){
	gulp.src('./**/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist'));
});
//и минимизируем файлы CSS
gulp.task('cssMin', function(){
	//снова важен порядок, поэтому делаем массив
	gulp.src(['css/reset.css', 'css/style_jcarousel.css',
		'css/style_s*.css', 'css/style_menu.css',
		'css/style_ch*.css', 'css/fff_tusjbold.css'
		 ])
	// .pipe(plumber()) // отлавливает ошибки кода
	.pipe(cssmin())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('./dist'));
});