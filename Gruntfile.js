"use strict";

module.exports = function(grunt){

	grunt.initConfig({
		
		jshint: {
			all: ['Gruntfile.js', 'server.js', 'app/js/*.js'],
			options: {
				jshintrc: true
			}
		},
		browserify: {
			dist: {
				src: ['app/js/backbone/**/*.js'],
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
				files: ['index.html', 'server.js', 'app/**/*'],
				tasks: ['build:dev', 'express:dev'],
				options: {
					spawn: false
				}
			}
		},
		uglify: {
			js: {
				files: {
					'build/browser.min.js': 'build/browser.js'
				}
			}
		},
		clean: {
			dist: {
				src: ['build/**/*']
			},
			postUglify: ['build/browser.js']
		},
		copy: {
			dist: {
				expand: true,
				cwd: 'app',
				src: ['index.html', 'templates/**/*']
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
	grunt.registerTask('build:dist', ['clean:dist', 'copy:dist', 'browserify:dist', 'uglify']);
	grunt.registerTask('test', ['jshint']);
};
