"use strict";

module.exports = function(grunt){

	grunt.initConfig({
		
		jshint: {
			all: ['Gruntfile.js', 'server.js', 'app/js/*.js'],
			options: {
				jshintrc: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint']);

};
