'use strict';

var configKeys = require('../../config/utils/configKeys'),
    debug = require('debug')('acceptance-test:hooks');

var hooks = function() {

    this.World = require("../../helpers/world");
    this.setDefaultTimeout(5 * 60 * 1000);

    var sauce = process.env[configKeys.SAUCE];

    this.After(function(scenario) {

        var driver = this.driver;

        function takeScreenShot() {
            return driver.takeScreenshot().then(function(buffer) {
                return scenario.attach(new Buffer(buffer, 'base64').toString('binary'), 'image/png');
            });
        }

        function quitDriver() {
            debug('quit the browser');
            return driver.quit();
        }

        if (sauce) {
            this.nemo.saucelabs.isJobPassed(!scenario.isFailed(), function() {
            });
        } else {
            if (scenario.isFailed()) {
                takeScreenShot();
            }
        }

        return quitDriver();

    });

    this.Before('@loginSuccess', function(scenario) {
        var _this = this;

        function callMethod() {
            scenario.attach(_this.nemo._config.get(configKeys.STAGE));
            return _this.nemo.wd.promise;
        }

        if(this.nemo === undefined) {
            return this.World().then(callMethod);
        }else {
            return callMethod();
        }
    });

    this.Before(function(scenario) {

        var _this = this;

        this.scenario = scenario;

        function updateReportAndSauceLabsInfo() {

            _this.scenario.attach('running test on ' + _this.config.get(configKeys.STAGE).toUpperCase() +
                ', locale: ' + JSON.stringify(_this.localesHelper.getLocales()));

            debug('running scenario: ', scenario.getName());

            if (sauce) {
                var sauceJobUrl = _this.nemo.saucelabs.getJobUrl();
                scenario.attach('<br>browser: ' + sauce + ' on sauce labs, here is the job url: ' +
                    '<a href=' + sauceJobUrl + ' target="_blank">' + sauceJobUrl + '</a>');

                _this.nemo.saucelabs.updateJob({
                    name: scenario.getName(),
                    cucumber_tags: scenario.getTags(),
                    build: _this.nemo._config.get(configKeys.BUILD)
                }, function() {
                });
            } else {
                scenario.attach('browser: ' + _this.nemo._config.get(configKeys.DRIVER).browser);
            }
        }

        if(this.nemo === undefined) {
            return this.World().then(updateReportAndSauceLabsInfo);
        }else {
            return updateReportAndSauceLabsInfo();
        }
    });
};

module.exports = hooks;
