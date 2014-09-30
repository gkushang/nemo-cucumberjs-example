/**
 * Created by kugajjar on 9/21/14.
 */
"use strict";

function PayPalHomePage(nemo) {
    this.nemo = nemo;
}

PayPalHomePage.prototype = {

    isLogoutExists: function () {

        var wd = this.nemo.wd;
        var driver = this.nemo.driver;
        var isVisible = true;
        this.nemo.driver.sleep(10000).then(function() {
            isVisible = driver.findElement(wd.By.css('.btn.btn-small.btn-secondary.logout')).length === 1;
        });

        return isVisible;
    }
};

module.exports = PayPalHomePage;

