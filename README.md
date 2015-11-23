# nemo-cucumberjs-example

[Nemo][1] integration with [CucumberJS][3] and [SauceLabs][2] with [HTML reports][4]

This example includes,
 * nemo with cucumberjs
 * execute tests locally and on sauce labs
 * update sauce labs dashboard with test info and results
 * grunt task to run cucumber scenarios
 * page objects
 * chai assertion for web-driver promises
 * cucumber HTML reports with screenshots

## HTML Report

Sample HTML report is attached to the repository as cucumber_html_report.png

## How to run tests

```bash
$ git clone https://github.com/gkushang/nemo-cucumberjs-example.git
$ cd nemo-cucumberjs-example
$ npm install
```
More information on how to run tests is available [here][5]


[1]: https://github.com/paypal/nemo "nemo"
[2]: https://saucelabs.com/ "sauceLabs"
[3]: https://github.com/cucumber/cucumber-js "cucumber.js"
[4]: https://github.com/mavdi/grunt-cucumberjs "HTML reports"