var PayPalLoginPage = require('../../pages/payPalLoginPage');
var PayPalHomePage = require('../../pages/payPalHomePage');
var assert = require('node-assertthat');

module.exports = function () {

    this.Then(/^I login to PayPal$/, function (callback) {

        new PayPalLoginPage(this.nemo).
            login(this.props.payPalUsername, this.props.payPalPassword);
        callback();

    });

    this.Then(/^I should be logged in$/, function (callback) {
        assert.that(new PayPalHomePage(this.nemo).isLogoutExists(), is.equalTo(true));
        callback();
    });
};