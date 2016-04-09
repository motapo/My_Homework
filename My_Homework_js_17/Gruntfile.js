module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // Все JS в папке libs
                    'js/home_work_js_9_10_checkbox.js',  // Конкретный файл
                    'js/home_work_js_9_10_jcarousel.js',  // Конкретный файл
                    'js/home_work_js_9_10_menu.js',  // Конкретный файл
                    'js/home_work_js_9_10_select.js',  // Конкретный файл
                ],
                dest: 'js/build/production.js'
            }
        },       
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },        
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                spawn: false,
                },
            }
        }
    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};