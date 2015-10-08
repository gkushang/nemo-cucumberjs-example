'use strict';

var loginPage = require('./loginPage');

module.exports = function navigate(nemo) {

	var toLogin = function(url) {
		nemo.driver.get(url);
		return loginPage(nemo);
	};

	return {
		toLogin: toLogin
	}
};