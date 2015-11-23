'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-cucumberjs');
	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-config')(grunt, {
		configPath: require('path').resolve('tasks')
	});

	grunt.registerTask('sauce-connect', ['sauce_connect:projectName']);
	grunt.registerTask('smoke', ['cucumberjs:smoke']);
	grunt.registerTask('acceptance', ['cucumberjs:acceptance']);
};

