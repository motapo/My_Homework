module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/*.js',  
                    'js/home_work_js_9_10_checkbox.js',  
                    'js/home_work_js_9_10_jcarousel.js',  
                    'js/home_work_js_9_10_menu.js',  
                    'js/home_work_js_9_10_select.js'  
                ],
                dest: 'js/build/production.js'
            },
            dist: {
                src: 'css/*.css', 
                dest: 'css/build/production.css'
            }
        },    
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }    
        },
        cssmin: {
            build: {
                src: 'css/build/production.css',
                dest: 'css/build/production.min.css'
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['cssmin']);
};