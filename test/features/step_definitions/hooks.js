var PayPalLoginPage = require('../../pages/payPalLoginPage');

module.exports = function () {

    this.World = require("../../cuke_world/world").World;

    this.Before(function (scenario, next) {

        console.log('Running Scenario: ' + scenario.getName());

        this.navigate.to(this.props.targetBaseUrl);

//        new PayPalLoginPage(this.nemo).
//            login(this.props.shopUsername, this.props.shopPassword).
//            then(this.navigate.to(this.props.shopUrl));

        next();

    });

    this.After(function (scenario, next) {
        this.driver.quit().then(function () {
            next();
        });

    });
};