'use strict';

module.exports = function accountPage(nemo) {

    //locators: register with nemo-view
    var _accountView = nemo.view.addView({
        'logout': 'li.vx_globalNav-listItem_logout'
    }, ['accountView'], false);

    //page methods
    var isVisible = function() {
        _accountView.logoutWaitVisible(nemo.waitTimeOut,
            'account page was not visible');
        return _accountView.logoutPresent();
    };

    return {
        isVisible: isVisible
    }
};
