'use strict';

module.exports = function(grunt){

	grunt.initConfig({
		
		jshint: {
			all: ['Gruntfile.js', 'server.js', 'app/assets/js/**/*.js'],
			options: {
				jshintrc: true
			}
		},
		browserify: {
			dev: {
				src: ['app/assets/js/**/*.js'],
				dest: 'build/browser.js',
				options: {
					transform: ['debowerify', 'hbsfy'],
					debug: true
				}
			}
		},
		express: {
			options: {},
			dev: {
				options: {
					script: 'server.js',
					node_env: 'development'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			express: {
				files: ['index.html', 'server.js', 'app/**/**'],
				tasks: ['build:dev', 'express:dev'],
				options: {
					spawn: false
				}
			}
		},
		uglify: {
			js: {
				files: {
					'build/browser.js': 'build/browser.js'
				}
			}
		},
		clean: {
			build: ['build'],
			dev: {
				src: ['build/**/*']
			},
			postUglify: ['build/browser.js']
		},
		copy: {
			dev: {
				expand: true,
				cwd: 'app/assets',
				src: ['index.html', 'templates/**/*', 'css/**/*'],
				dest: 'build/',
				flatten: false,
				filter: 'isFile'
			}
		}
	});

	//Load Grunt Tasks
	
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//Register Grunt Tasks

	grunt.registerTask('default', ['express:dev', 'watch:express']);
	grunt.registerTask('build:dev', ['clean:dev', 'copy:dev', 'browserify:dev']);
	grunt.registerTask('build:prod', ['clean:dev', 'jshint:all', 'browserify:dev', 'copy:dev', 'uglify']);
	grunt.registerTask('test', ['jshint']);
};
