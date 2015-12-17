'use strict';

module.exports = function locale(locale) {

    var parseLocale = function(locale) {
        return {
            lang: locale.split('_')[0],
            country: locale.split('_')[1]
        }
    };

    var propertiesReader = require('properties-reader'),
        localesDir = process.cwd() + '/locales/',
        locales = parseLocale(locale);

    var getErrorProps = function() {
            return _getPropertyFile('error.properties');
        },

        _getPropertyFile = function(fileName) {
            return propertiesReader(localesDir + locales.country + '/' +
                locales.lang + '/' + fileName);
        },

        getLocales = function() {
            return locales;
        };

    return {
        getErrorProps: getErrorProps,
        getLocales: getLocales
    };
};
