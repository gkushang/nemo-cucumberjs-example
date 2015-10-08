'use strict';

var Nemo = require('nemo'),
		navigate = require('../pages/navigate');

function WorldConstructor(callback) {

	var self = this;

	this.nemo = new Nemo(process.cwd() + '/test/', {}, function _cbNemo(err) {

		function navigateToLoginPage() {
			self.loginPage = navigate(self.nemo).toLogin(self.nemo._config.get('baseUrl'));
			return self.loginPage;
		}

		function defineChaiPromiseAsObject() {
			Object.defineProperty(self.nemo.wd.promise.Promise.prototype, 'should', {
				get: Object.prototype.__lookupGetter__('should'),
				set: Object.prototype.__lookupSetter__('should')
			});
		}

		defineChaiPromiseAsObject();

		if (err) {
			callback(err);
		} else {
			navigateToLoginPage().sync()
					.then(function() {
						callback();
					}, callback);
		}
	});
}

module.exports.World = WorldConstructor;
