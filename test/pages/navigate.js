/**
 * Created by kugajjar on 9/21/14.
 */

function Navigate(nemo) {
    this.driver = nemo.driver;
}

Navigate.prototype = {

    to: function (url) {
        this.driver.navigate().to(url).
            then(function () {
                console.log('Successfully navigated to ' + url);
            });
        return this;
    }
};

module.exports = Navigate;