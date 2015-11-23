'use strict';

var configKeys = require('../../config/utils/configKeys'),
	debug = require('debug')('acceptance-test:hooks');

var hooks = function() {

	this.World = require("../../helpers/world").World;

	var sauce = process.env[configKeys.SAUCE];

	this.After(function(done) {

		var driver = this.driver,
			scenario = this.scenario;

		function takeScreenShot() {
			return driver.takeScreenshot().then(function(buffer) {
				return scenario.attach(new Buffer(buffer, 'base64').toString('binary'), 'image/png');
			});
		}

		function quitDriver() {
			debug('quit the browser');
			return driver.quit();
		}

		if (sauce) {
			this.nemo.saucelabs.isJobPassed(!scenario.isFailed(), function() {
			});
		} else {
			if (scenario.isFailed()) {
				takeScreenShot();
			}
		}

		quitDriver().then(function() {
			done();
		}, done);

	});


	this.Before(function(scenario, done) {

		var _this = this;

		this.scenario = scenario;

		this.scenario.attach('running test on ' + this.config.get(configKeys.STAGE).toUpperCase() +
			', locale: ' + JSON.stringify(this.localesHelper.getLocales()));

		debug('running scenario: ', scenario.getName());

		if (sauce) {
			var sauceJobUrl = this.nemo.saucelabs.getJobUrl();
			scenario.attach('<br>browser: ' + sauce + ' on sauce labs, here is the job url: ' +
				'<a href=' + sauceJobUrl + ' target="_blank">' + sauceJobUrl + '</a>');

			_this.nemo.saucelabs.updateJob({
				name: scenario.getName(),
				cucumber_tags: scenario.getTags(),
				build: this.nemo._config.get(configKeys.BUILD)
			}, function() {
				done();
			});
		} else {
			scenario.attach('browser: ' + this.nemo._config.get(configKeys.DRIVER).browser);
			done();
		}

	});
};

module.exports = hooks;
