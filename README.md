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

## How to run tests

```bash
$ git clone https://github.com/gkushang/nemo-cucumberjs-example.git
$ cd nemo-cucumberjs-example
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