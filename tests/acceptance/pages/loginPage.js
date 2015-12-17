'use strict';

var accountPage = require('./accountPage');

module.exports = function loginPage(nemo) {

    //locators: register with nemo-view
    var _loginView = nemo.view.addView({
        'email': '#email',
        'password': '#password',
        'login': '#btnLogin'
    }, ['loginView'], false);

    //page methods
    var toAccount = function(email, password) {
            _loginView.email().sendKeys(email);
            _loginView.password().sendKeys(password);
            //recommendation approach is to waitUntil but PP Login needs wait
            nemo.takeNap(2);
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
