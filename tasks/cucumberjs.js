'use strict';

module.exports = function cucumberjs(grunt) {
	function getDefaultOptions(tags) {
		return {
			options: {
				format: 'html',
				output: 'test/report/cucumber_report.html',
				theme: 'bootstrap',
				tags: tags,
				require: grunt.option('require', 'test/step_definitions/')
			},
			src: ['test/features/']
		};
	}

	return {
		acceptance: getDefaultOptions(grunt.option('tags')),
		smoke: getDefaultOptions('@smoke')
	};
};
