
module.exports = function () {

    this.World = require("../../cuke_world/world").World;

    this.After(function (scenario, next) {
        this.driver.quit().then(function () {
            next();
        });

    });

    this.Before(function (scenario, next) {

        console.log('Running Scenario: ' + scenario.getName());

        this.navigate.to(this.props.targetBaseUrl);

        next();

    });
};