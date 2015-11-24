'use strict';

module.exports = function cucumberjs(grunt) {
	function getDefaultOptions(tags) {
		return {
			options: {
				format: 'html',
				output: 'tests/acceptance/report/cucumber_report.html',
				theme: 'bootstrap',
				tags: getTags(tags),
				saveJson: true,
				debug: true,
				debugger: grunt.option('cucumber-debug') || false,
				strict: true,
				require: grunt.option('require', 'tests/acceptance/step_definitions/')
			},
			src: ['tests/acceptance/features/']
		};
	}

	function getTags(tags) {

		var tagsArray = ['~@blocked', '~@todo'];

		if(tags) {
			tagsArray.push(tags);
		}

		return tagsArray;
	}

	return {
		acceptance:		getDefaultOptions(grunt.option('tags')),
		smoke:			getDefaultOptions('@smoke')
	};
};
