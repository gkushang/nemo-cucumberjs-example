'use strict';

module.exports = function() {

	this.World = require("../helper/world").World;

	this.After(function(scenario, callback) {

		var self = this;

		function takeScreenShot() {
			return self.nemo.driver.takeScreenshot().then(function(buffer) {
				return scenario.attach(new Buffer(buffer, 'base64').toString('binary'), 'image/png');
			});
		}

		function quit() {
			return self.nemo.driver.quit();
		}

		takeScreenShot()
				.then(quit)
				.then(function() {
					callback();
				}, callback);
	});
};