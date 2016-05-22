var gulp = require('gulp');
var	concat = require('gulp-concat');//объединяет css 
var cssmin = require('gulp-cssmin');//минимзирует css
var uglify = require('gulp-uglify');//сливает и минимизирует js
//watch есть по умолчанию, поэтому его можно не прописывать как переменную
//var watch = require('gulp-watch');
var plumber = require('gulp-plumber'); //отлавливает ошибки кода
// для его работы в таск с ошибками добавляется строка
// .pipe(plumber())
var autoprefixer = require('gulp-autoprefixer'); //добавляет префиксы -webkit и т.д.
var imagemin = require('gulp-imagemin'); //жмет картинки
var webserver = require('gulp-webserver');//следит за сайтом 
var gutil = require('gulp-util');//модуль для релизов нашего проэкта

//если прописать в дефолтном таске все нужные команды, 
//то можно вызывать их выполнение командой gulp
//gulp.task('default', ['cssMin', 'jsUglify', 'watch']);
gulp.task('default', ['cssConcat', 'cssMin', 'jsUglify', 'watch', 'webServer']);

//создание релизов проекта
gulp.task('release', function(){
	var number = gutil.env.number;
	console.log('Number', number);
});

//запускаем сервер для отслеживания и релоадов всех файлов проекта
gulp.task('webServer', function(){
	gulp.src('./')
	.pipe(webserver({
	livereload: true,
	directoryListing: true,
	open: true
	}));
});

//картинки сжимаем 
gulp.task('imageMin', function(){
	gulp.src('./img/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/imgMin'));
});

//объединяем файлы CSS
gulp.task('cssConcat', function(){
	gulp.src('./**/*.css')
	.pipe(autoprefixer())
	.pipe(plumber())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
	gulp.watch('./css/**/*.css', ['cssMin']);
	gulp.watch('./js/**/*.js', ['jsUglify']);
});

//объединяем и минимизируем файлы JS
gulp.task('jsUglify', function(){
	//объединяем и минимизируем файлы JS самописанные
	gulp.src(['./js/home_work_js_9_10_*.js', './js/grunt_sad.js'])
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('./dist'));
	//объединяем и минимизируем файлы JS бибилотек
	//в данной работе важен первым в файле файл jQuery
	gulp.src([
		'./js/libs/jquery-1.12.2.min.js',
		'./js/libs/jquery.s*.js'
		])
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.libs.min.js'))
	.pipe(gulp.dest('./dist'));
});

//и минимизируем файлы CSS
gulp.task('cssMin', function(){
	//снова важен порядок, поэтому делаем массив
	gulp.src(['css/reset.css', 'css/style_jcarousel.css',
		'css/style_s*.css', 'css/style_menu.css',
		'css/style_ch*.css', 'css/fff_tusjbold.css'
		 ])
	.pipe(cssmin())
	.pipe(plumber()) // отлавливает ошибки кода
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('./dist'));
});