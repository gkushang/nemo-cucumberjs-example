'use strict';

var Nemo = require('nemo'),
    ConfigKeys = require('../config/utils/configKeys'),
    configuration = require('../config/utils/configuration'),
    localeHelper = require('./locale'),
    navigate = require('../pages/navigate');

function WorldConstructor(callback) {

    var _this = this;

    this.nemo = new Nemo(configuration.getBaseDir(), configuration.override(), function _cbNemo(err) {

        function navigateToBaseUrl() {
            _this.loginPage = navigate(_this.nemo).toStageUrl(_this.localesHelper.getLocales());
            return _this.loginPage;
        }

        function defineChaiPromiseAsObject() {
            Object.defineProperty(_this.nemo.wd.promise.Promise.prototype, 'should', {
                get: Object.prototype.__lookupGetter__('should'),
                set: Object.prototype.__lookupSetter__('should')
            });
        }

        if (err) {
            callback(err);
        } else {
            _this.env = process.env;
            _this.driver = _this.nemo.driver;
            _this.config = _this.nemo._config;
            _this.nemo.waitTimeOut = _this.nemo._config.get(ConfigKeys.WAIT_TIME_OUT);

            _this.nemo.takeNap = function(seconds) {
                return seconds ? _this.driver.sleep(seconds * 1000) : _this.driver.sleep(1000);
            };

            _this.localesHelper = localeHelper(_this.config.get(ConfigKeys.LOCALE));

            _this.navigateToLoginPage = navigateToBaseUrl;

            _this.nemo.switchTab = function() {
                _this.nemo.window.switchTab();
                return _this.nemo.takeNap();
            };

            defineChaiPromiseAsObject();

            navigateToBaseUrl().sync()
                .then(function() {
                    callback();
                }, function(err) {
                    _this.driver.quit();
                    callback(err);
                });
        }
    });
}

module.exports.World = WorldConstructor;
