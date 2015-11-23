
##nemo-cucumber-example acceptance tests

#### run smoke tests
smoke test runs all the cucumber tests tagged with @smoke
```bash
$ STAGE=stageXXXX DEBUG=* grunt smoke
```

```bash
$ STAGE=msmaster DEBUG=* grunt smoke
```


#### run acceptance tests
```bash
$ STAGE=stageXXXX DEBUG=* grunt acceptance
```

#### run tests on sauce labs
Pass a `SAUCE` parameter with the browser name.

`sauce-connect` task will launch default sauce tunnel (auth-tunnel) if required.

to run test on sauce labs Firefox browser

e.g. run smoke test on msmaster
```bash
$ STAGE=msmaster SAUCE=firefox grunt sauce-connect smoke
```

to run test on sauce labs Chrome browser
```bash
$ STAGE=stageXXXX SAUCE=chrome grunt sauce-connect acceptance
```

launch specific sauce-tunnel by passing i param
this will be useful to run multiple jobs on jenkins, each job connects to unique sauce-tunnel
```bash
$ STAGE=stageXXXX SAUCE=firefox grunt sauce-connect -i myTunnel smoke
```

capture Build ID and record on Sauce Labs
```bash
$ STAGE=stageXXXX SAUCE=chrome BUILD=xyzbuild_0.1.2233443 grunt sauce-connect acceptance
```

#### run tests on user stage, e.g. Altus CI or locally
pass user stage [USER_STAGE] with the full domain along with [STAGE]

altus ci
```bash
$ STAGE=stageXXXX DEBUG=* USER_STAGE=altusUserStage.qa.paypal.com grunt smoke
```

localhost
```bash
	$ STAGE=stageXXXX USER_STAGE=localhost.paypal.com:8000 grunt smoke
```

#### run specific cucumber tags
e.g. below command will run two tests, e.g. tag1 and tag2
```bash
$ STAGE=stageXXXX grunt acceptance --tags=@tag1,@tag2
```

#### nemo-cucumber-example cucumber runner ignores scenarios tagged with `@todo, @blocked`
if your scenarios are under progress or blocked mark them as `@todo or @blocked` and they will be ignored


#### debug tests with cucumber
```bash
$ STAGE=stageXXXX grunt acceptance --tags=@tag1 --cucumber-debug=true
```

#### run tests on specific Locale, by default test runs on en_US locale
```bash
$ STAGE=stageXXXX DEBUG=* LOCALE=fr_FR grunt acceptance --tags=@tag1 --cucumber-debug=true
```

#### acceptance tests reports (HTML)
to see the html cucumber test report, go to ```/tests/acceptance/report```



