var gulp = require('gulp');
var	concat = require('gulp-concat');//объединяет css 
var cssmin = require('gulp-cssmin');//минимзирует css
var uglify = require('gulp-uglify');//сливает и минимизирует js
var plumber = require('gulp-plumber'); //отлавливает ошибки кода
var autoprefixer = require('gulp-autoprefixer'); //добавляет префиксы -webkit и т.д.
var imagemin = require('gulp-imagemin'); //жмет картинки
var webserver = require('gulp-webserver');//следит за сайтом 
var gutil = require('gulp-util');//модуль для релизов нашего проэкта
var spritesmith = require('gulp.spritesmith'); //сборщик спрайтов
var sass = require('gulp-sass'); //конвертит все scss в css 
var sassGlob = require('gulp-sass-glob');/*..позволяет делать импорт стилей из каталога всех сразу*/
var globSass = require('gulp-sass-globbing'); //тоже самое, ставил ради эксперимента
var cleanCss = require('gulp-clean-css'); //ставилрали эксперимента, пользы не вынес
var rigger = require('gulp-rigger'); //импортирует один файлв другой, нужен нам для импорта кусков html в index

//если прописать в дефолтном таске все нужные команды, 
//то можно вызывать их выполнение командой gulp
gulp.task('default', ['styles', 'cssMin', 'watch', 'webServer']);

gulp.task('html', function () {
    gulp.src('./index/index.html') // берем черновик странички 
        .pipe(rigger()) // прогоняем через риггер
        .pipe(gulp.dest('./')) //Выплюнем в корень над папкой dest
});

//берем все файлы scss и конвертим их в такие же css
gulp.task('styles', function () {
    return gulp
        .src('scss/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

//запускаем сервер для отслеживания и релоадов всех файлов проекта
gulp.task('webServer', function(){
	gulp.src('./')
	.pipe(webserver({
	livereload: true,
	directoryListing: false,
	open: true
	}));
});

// отслеживаем изменение файлов js, html и scss 
// и сразу же компилируем новые, а потом минимзирует результаты 
gulp.task('watch', function(){
	gulp.watch('./js/**/*.js', ['jsUglify']);
	gulp.watch('./html/**/*.html', ['html']);
	gulp.watch('./scss/**/*.scss', ['styles']);
	//запуск cssMin произойдет в момент, когда комплириуется последний в списке css
	gulp.watch('./css/styles-search-panel.css', ['cssMin']);   
	});

//командой cssSass создаем в папке CSS 
// из файлов scss компилированные файлы css с теми же именами 
gulp.task('Sass', function(){
	gulp.src('./scss/all-import-varible-mixed.scss')
	.pipe(autoprefixer())
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});

//минимизируем файлы CSS
gulp.task('cssMin', function(){
	//снова важен порядок, поэтому делаем массив
	gulp.src(['css/!reset.css', 'css/*.css'])
	.pipe(cssmin())
	.pipe(plumber()) // отлавливает ошибки кода
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('./dist'));
});

//объединяем и минимизируем файлы JS
gulp.task('jsUglify', function(){
	//объединяем и минимизируем файлы JS самописанные
	gulp.src('./js/*.js')
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('./dist'));
	//объединяем и минимизируем файлы JS бибилотек
	gulp.src(['./js/libs/jquery-1.12.2.min.js', 
		'./js/libs/jquery-jCarousel-v.0.3.4.js',
		'js/libs/jquery-UI.1.11.4-for-Accordeon.js'])
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.libs.min.js'))
	.pipe(gulp.dest('./dist'));
});

//делаем спрайты 
gulp.task('sprite', function(){
	var spriteData = gulp.src('./dest/iconSocialF/*.png').pipe(spritesmith({
		imgName: 'spriteSocialF.png',
		cssName: 'spriteSocialF.css'
	}));
return spriteData.pipe(gulp.dest('dest/'));	
});

//картинки сжимаем 
gulp.task('imageMin', function(){
	gulp.src('./img/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/imgMin'));
});

//объединяем файлы CSS - особо не нужен, лучше сразу использовать cssMin
//там уже прописан у меня concat 
gulp.task('cssConcat', function(){
	gulp.src(['css/!reset.css', 'css/*.css'])
	.pipe(autoprefixer())
	.pipe(plumber())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist'));
});

//создание релизов проекта - есть в видео, не разбирался за ненадобностью
gulp.task('release', function(){
	var number = gutil.env.number;
	console.log('Number', number);
});
