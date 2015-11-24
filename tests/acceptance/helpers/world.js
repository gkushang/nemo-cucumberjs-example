'use strict';

var Nemo = require('nemo'),
    ConfigKeys = require('../config/utils/configKeys'),
    configuration = require('../config/utils/configuration'),
    localeHelper = require('./locale'),
    Q = require('q'),
    navigate = require('../pages/navigate');

function World() {

    var _this = this;

    var deferred = Q.defer();

    function instantiateNemo() {

        _this.nemo = new Nemo(configuration.getBaseDir(), configuration.override(), function _cbNemo(err) {

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
                throw new Error(err);
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
                    .thenCatch(function(err) {
                        _this.driver.quit();
                        throw new Error(err);
                    });

                deferred.resolve();
            }
        });

        return deferred.promise;
    }

    return instantiateNemo().then(function () {}, function (err) {
        throw new Error(err);
    });
}

module.exports = function() {
    this.World = World;
};
