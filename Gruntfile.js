'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		cucumberjs: {
			options: {
				format: 'html',
				output: 'test/report/cucumber-report.html',
				theme: 'bootstrap'
			},
			my_features: ['test/features/']
		}
	});

	grunt.loadNpmTasks('grunt-cucumberjs');
	require('grunt-config-dir')(grunt, {
		configDir: require('path').resolve('tasks')
	});

	grunt.registerTask('smoke', ['cucumberjs:smoke']);
	grunt.registerTask('acceptance', ['cucumberjs:acceptance']);
};

