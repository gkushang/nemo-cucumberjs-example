# nemo-grunt-cucumberjs

Grunt task to run Cucumber tests with Nemo and produces HTML test reports 

## Setup WebDriver

Download Selenium Jar version 2.42.2 and create a symbolic lunk

``` shell
ln -s /Users/yourname/path/to/selenium-server-standalone-2.42.1.jar /usr/local/bin/selenium-server-standalone.jar
```

Install and start the application.

```bash
$ git clone https://github.com/kugajjar/nemo-grunt-cucumberjs.git
$ cd nemo-grunt-cucumberjs
$ npm install
```

Run Cucumber tests

```bash
$ grunt cucumberjs
```
