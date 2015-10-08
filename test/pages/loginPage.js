'use strict';

var accountPage = require('./accountPage');

module.exports = function loginPage(nemo) {
	
	var _loginView = nemo.view.addView({
		'email': '#email',
		'password': '#password',
		'login': '#btnLogin'
	}, ['loginView'], false);
	
	var toAccount = function(email, password) {
				_loginView.email().sendKeys(email);
				_loginView.password().sendKeys(password);
				nemo.driver.sleep(2000);
				_loginView.login().click();
				return accountPage(nemo);
			},
			
			sync = function() {
				return _loginView.emailWaitVisible(nemo.waitTimeOut,
						'Login Page: Email was not visible');
			};
	
	return {
		toAccount: toAccount,
		sync: sync
	}
};
