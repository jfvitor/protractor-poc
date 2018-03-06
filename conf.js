exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: [
    'step_definitions/home_spec.js',
    'step_definitions/details_spec.js'
  ],
  onPrepare: function() {
    browser.driver.manage().window().setSize(1680, 1050);
    //browser.driver.manage().window().maximize()
    // browser.ignoreSynchronization = true;
  }
};
