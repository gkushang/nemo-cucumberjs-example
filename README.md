# nemo-cucumberjs-example

[Nemo][1] + [CucumberJS][2] with [HTML reports][3]

This example includes,
 * nemo with cucumberjs
 * grunt task to run cucumber scenarios
 * page objects
 * chai assertion for web-driver promises
 * cucumber HTML reports

## HTML Report

Sample HTML report is attached to the repository as cucumber_html_report.png

## Setup WebDriver

Download Selenium Jar version 2.43.0 and create a symbolic lunk

``` shell
ln -s /Users/yourname/path/to/selenium-server-standalone-2.43.0.jar /usr/local/bin/selenium-server-standalone.jar
```

Download Chromedriver
``` shell
brew install chromedriver
```

Install and start the application.

```bash
$ git clone https://github.com/gkushang/nemo-grunt-cucumberjs.git
$ cd nemo-grunt-cucumberjs
$ npm install
```

Run Cucumber acceptance tests

```bash
$ grunt acceptance
```

Run Cucumber smoke tests

```bash
$ grunt smoke
```

[1]: https://github.com/paypal/nemo "nemo"
[2]: https://github.com/cucumber/cucumber-js "cucumber.js"
[3]: https://github.com/mavdi/grunt-cucumberjs "HTML reports"