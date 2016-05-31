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
var imagemin = require('gulp-imagemin'); //жмет картинки
var Bing = require('node-bing-api')({ accKey: "XBO6HgwlU+JGnJIuEw0MaHxLVgFAsgZWsLIAVXbQpMQ" }); //поисковичек

gulp.task('default', ['sass', 'html', 'cssMin1440+', 'cssMin768+', 'cssMin320+', 'cssMinFonts', 'watch', 'webServer']);
gulp.task('IE', ['IEsass', 'html', 'IEcssMin1440+', 'IEcssMin768+', 'IEcssMin320+']);

gulp.task('watch', function(){
	gulp.watch('js/**/*.js',['jsUglify']);
	gulp.watch('js-IE/**/*.js',['IEjsUglify']);
	gulp.watch('scss/**/*.scss', ['sass', 'cssMin768+', 'cssMin1440+', 'cssMin320+', 'cssMinFonts']);
	gulp.watch('scss-IE/**/*.scss', ['IEsass', 'IEcssMin768+', 'IEcssMin1440+', 'IEcssMin320+']);
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

gulp.task('cssMinFonts', function(){
	gulp.src(['css/fonts/*.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min.fonts.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('cssMin1440+', function(){
	gulp.src(['css/!reset.css', 'css/**/*1440+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min1440+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('IEcssMin1440+', function(){
	gulp.src(['css-IE/!reset.css', 'css-IE/**/*1440+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('IE.all.min1440+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist-IE')) //выдаем результат в папку
});

gulp.task('cssMin768+', function(){
	gulp.src(['css/**/*768+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min768+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('IEcssMin768+', function(){
	gulp.src(['css-IE/!reset.css', 'css-IE/**/*768+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('IE.all.min768+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist-IE')) //выдаем результат в папку
});

gulp.task('cssMin320+', function(){
	gulp.src(['css/**/*320+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('all.min320+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist')) //выдаем результат в папку
});

gulp.task('IEcssMin320+', function(){
	gulp.src(['css-IE/!reset.css', 'css-IE/**/*320+.css']) //обнуление должно быть всегда первым
	.pipe(autoprefixer())
	.pipe(cssmin()) // минимизируем 
	.pipe(plumber()) // отлавливаем возможные ошибки
	.pipe(concat('IE.all.min320+.css')) //объединяем в один файл
	.pipe(gulp.dest('./dist-IE')) //выдаем результат в папку
});

gulp.task('sass', function(){
	gulp.src('scss/**/*.scss')
	.pipe(autoprefixer())
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});

gulp.task('IEsass', function(){
	gulp.src('scss-IE/**/*.scss')
	.pipe(autoprefixer())
	.pipe(sass())
	.pipe(gulp.dest('./css-IE'))
});

gulp.task('IEjsUglify', function(){
	gulp.src('js-IE/*.js')
	.pipe(uglify())
	.pipe(plumber())
	.pipe(concat('IE.all.min.js'))
	.pipe(gulp.dest('./dist-IE'))
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
	var spriteData = gulp.src('img/sprite/foto/*.*')
	.pipe(spritesmith({
		imgName: 'spriteAll.jpg',
		cssName: 'spriteAll.css'
		
	}));
	return spriteData.pipe(gulp.dest('img/sprite'));
});

gulp.task('ImgMin', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});



