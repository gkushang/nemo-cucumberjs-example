var Nemo = require('nemo'),
    Navigate = require('../pages/navigate'),
    plugins = require('../config/nemo-plugins'),
    config = {
        'view': ['payPalLogin_locator','payPalHomePage_locator']
    };

process.env['PATH'] += ':' + process.env['HOME'];

process.env.nemoData = JSON.stringify({

    targetBrowser: "chrome",
    targetServer: "localhost",
    "serverProps": {
        "port": 4444
    },
    serverCaps: {
        "port": 4444
    },
    seleniumJar: "/usr/local/bin/selenium-server-standalone.jar",
    targetBaseUrl: "http://www.paypal.com/",
    payPalUsername: "your_username",
    payPalPassword: "your_password",
    autoBaseDir: process.cwd() + "/test"
});

var WorldConstructor = function WorldConstructor(callback) {

    var thisWorld = this;

    (new Nemo(plugins)).
        setup(config).
        then(function (nemo) {

            thisWorld.nemo = nemo;
            thisWorld.driver = nemo.driver;
            thisWorld.props = nemo.props;
            thisWorld.navigate = new Navigate(nemo);
            callback();

        }).
        then(null, function (err) {
            console.error('Error in instantiating World: ' + err);
        });
};

exports.World = WorldConstructor;