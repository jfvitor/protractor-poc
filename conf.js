exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: [
    'feature/step_definitions/home_spec.js',
    'feature/step_definitions/details_spec.js'
  ],
  onPrepare: function() {
    browser.driver.manage().window().setSize(1680, 1050);
    //browser.driver.manage().window().maximize()
    // browser.ignoreSynchronization = true;
     jasmine.getEnv().addReporter(reporter);
  }
};
