'use strict';

var loginPage = require('./loginPage'),
    qs = require('qs'),
    ConfigKeys = require('../config/utils/configKeys');

module.exports = function navigate(nemo) {

    var toStageUrl = function(locales) {
            nemo.driver.get(_buildUrl(locales));
            return loginPage(nemo);
        },

        _buildUrl = function(locales) {
            var stage = nemo._config.get(ConfigKeys.STAGE);
            var stageUrl = nemo._config.get(ConfigKeys.STAGE_URL);

            var userStage = nemo._config.get(ConfigKeys.USER_STAGE);
            var userStageUrl = nemo._config.get(ConfigKeys.USER_STAGE_URL);

            function buildUrl(baseUrl) {
                return baseUrl +
                    qs.stringify({'country.x': locales.country, 'locale.x': locales.lang});
            }

            if (userStage) {
                return buildUrl(userStageUrl.replace('{USER_STAGE}', userStage));
            } else if (stage) {
                return buildUrl(stageUrl.replace('{STAGE}', stage));
            }
        };

    return {
        toStageUrl: toStageUrl
    }
};