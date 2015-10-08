'use strict';

module.exports = function accountPage(nemo) {

	var _accountView = nemo.view.addView({
		'logout': 'li.vx_globalNav-listItem_logout'
	}, ['accountView'], false);

	var isVisible = function() {
		_accountView.logoutWaitVisible(2000,
				'account page was not visible');
		return _accountView.logout().isDisplayed();
	};

	return {
		isVisible: isVisible
	}
};
