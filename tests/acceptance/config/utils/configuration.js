'use strict';

var sauceConfig = require('./../sauce.json'),
    commonConfig = require('./../config.json'),
    configKey = require('./configKeys');

module.exports = {

    override: function() {
        var stage = process.env[configKey.STAGE];
        var sauce = process.env[configKey.SAUCE];

        var config = {};

        if (!stage) {
            throw new Error('STAGE must be defined');
        }

        if (sauce) {

            if (!sauceConfig[sauce]) {
                throw new Error('SAUCE value ' + sauce + ' does not exists. Please verify your command line arguments.');
            }

            config = sauceConfig[sauce];

            var providedTunnelIdentifier = process.env[configKey.SAUCE_LABS.TUNNEL_IDENTIFIER];
            if (providedTunnelIdentifier) {
                config.driver.serverCaps[configKey.SAUCE_LABS.TUNNEL_IDENTIFIER] = providedTunnelIdentifier;
            }
        }

        return config;
    },

    getBaseDir: function() {
        return process.cwd() + commonConfig.baseDir;
    }
};
