/**
 * Created by kugajjar on 9/21/14.
 */
"use strict";

var Q           = require('q');

function PayPalLoginPage(nemo) {
    this.nemo = nemo;
}

PayPalLoginPage.prototype = {

    login: function (email, password) {

        var view = this.nemo.view.payPalLogin_locator;

        var loginButton = view.loginButton();
        var emailBox = view.email();
        var passwordBox = view.password();
        var driveX = this.nemo.drivex;
        var submit = view.submit();

        driveX.waitForElement(loginButton, 10000, 'Login button was not displayed');

        loginButton.click();

        console.log("waiting now");
        this.nemo.driver.sleep(10000).then(function(){

            driveX.waitForElement(submit, 10000, 'Email button was not displayed').then(function () {

            emailBox.sendKeys(email);

            console.log("email clicked...");

            passwordBox.sendKeys(password);

            submit.click();

            });
        });


        return Q.resolve();
    }

};

module.exports = PayPalLoginPage;

