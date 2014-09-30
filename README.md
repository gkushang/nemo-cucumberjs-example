# nemo-grunt-cucumberjs

Grunt task to run Cucumber tests with Nemo and produces HTML test reports 

## HTML Report

Sample HTML report is attached to the repository as Html_Report.png

## Setup WebDriver

Download Selenium Jar version 2.42.2 and create a symbolic lunk

``` shell
ln -s /Users/yourname/path/to/selenium-server-standalone-2.42.1.jar /usr/local/bin/selenium-server-standalone.jar
```

<<<<<<< Updated upstream
=======
Download Chromedriver to your $HOME path

>>>>>>> Stashed changes
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
