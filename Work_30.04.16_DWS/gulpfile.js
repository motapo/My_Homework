var gulp = require('gulp'); 
var rigger = require('gulp-rigger'); //работа с html фрагментами
var concat = require('gulp-concat'); //объединяет css файлы в один
var cssmin = require('gulp-cssmin'); //работа с css по финимизации
var uglify = require('gulp-uglify'); //работа с js фрагментами
var sass = require('gulp-sass'); //конвертер scss в css
var sassGlob = require('gulp-sass-glob'); //позволяет работать с целой папкой scss файлов
var plumber = require('gulp-plumber'); //отлавливает ощибки кода
var spritesmith = require('gulp.spritesmith'); //создает спрайты
var autoprefixer = require('gulp-autoprefixer'); //добавляет автопрефиксы -mos -webkit
var webserver = require('gulp-webserver'); //отслеживает все изменения и обновляет страницу
var uncss = require('gulp-uncss'); //удаляет неиспользуемые css свойства


gulp.task('default', ['Sass', 'html', 'cssMin768', 'cssMin480', 'cssMin320', 'styles', 'cssMin', 'watch', 'webServer']);

gulp.task('watch', function(){
	gulp.watch('js/**/*.js',['jsUglify']);
	gulp.watch('scss/**/*.scss', ['Sass', 'cssMin', 'cssMin768', 'cssMin480', 'cssMin320']);
	gulp.watch('html/**/*.html', ['html']);
	gulp.watch('index/index.html', ['html']);
});


gulp.task('unCss', function () {
    return gulp.src('css/*.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./distCssUn'));
});



gulp.task('html',function(){
	gulp.src('index/index.html') //рабочий html из папки index 
	.pipe(rigger()) // прогоняем через rigger - добавляем в файл все фрагменты html из папки html
	.pipe(gulp.dest('./')) //готовый вариант выплевываем в корень проэкта
});

gulp.task('cssMin', function(){
	gulp.src(['css/!reset.css', 'css/**/*.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('cssMin768', function(){
	gulp.src(['css/**/*768px.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min768px.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('cssMin480', function(){
	gulp.src(['css/**/*480px.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min480px.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});
gulp.task('cssMin320', function(){
	gulp.src(['css/**/*320px.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min320px.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('Sass', function(){
	gulp.src('scss/*.scss')
	.pipe(autoprefixer())
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});

gulp.task('jsUglify', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('./dist'))
	gulp.src('js/libs/*.js')
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('all.libs.min.js'))
	.pipe(gulp.dest('./dist'))
});

gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
	.pipe(sassGlob())
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});


gulp.task('webServer', function(){
	gulp.src('./')
	.pipe(webserver({
	livereload: true,
	directoryListing: false,
	open: true
	}));
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('img/actors/*.png')
	.pipe(spritesmith({
		imgName: 'spriteAll.png',
		cssName: 'spriteAll.css',
		algorithm: 'top-down'
	}));
	return spriteData.pipe(gulp.dest('img/'));
});





