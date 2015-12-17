'use strict';

var config = require('../tests/acceptance/config/config.json'),
    configKey = require('../tests/acceptance/config/utils/configKeys');

module.exports = function(grunt) {

    var providedTunnelIdentifier = grunt.option('i');
    var defaultTunnelIdentifier = config.driver.serverCaps[configKey.SAUCE_LABS.TUNNEL_IDENTIFIER];

    if (providedTunnelIdentifier) {
        process.env[configKey.SAUCE_LABS.TUNNEL_IDENTIFIER] = providedTunnelIdentifier;
    }

    return {
        projectName: {
            options: {
                username: config.driver.serverCaps.username,
                accessKey: config.driver.serverCaps.accessKey,
                tunnelIdentifier: providedTunnelIdentifier || defaultTunnelIdentifier
            }
        }
    };
};
