exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
	  'browserName': 'chrome'
  },  
  framework:'jasmine',
  specs: ['test.js'],
   
  jasmineNodeOpts: {
	  defaultTimeoutInterval: 100000
  }

};
