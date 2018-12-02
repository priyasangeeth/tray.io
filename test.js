describe('Go to Tray.io', function() {
 it('Login to Tray.io', function() {
		browser.ignoreSynchronization = true;
		browser.get('https://app.tray.io/');
		var loginButton = element(by.css('#login-form button'));
  
		element(by.name('username')).sendKeys('priyas.sm@gmail.com');
		element(by.name('password')).sendKeys('Vetha@15');
 
		loginButton.click();
		browser.sleep(20000);		
	});
	
 it('create workflow', function() {
		element(by.css("a[href*='create']")).click();
		browser.sleep(3000);
		element(by.css("input[name='name']")).sendKeys('demotest1');
		element(by.css("div[title='Save']")).click();
		browser.sleep(3000);
		element(by.css(".Connectors-grid-element___207RbN:nth-of-type(4)")).click();
		browser.sleep(3000);
		element(by.css("a[title='Close']")).click();
		browser.sleep(3000);
	});
	 
 it('delete workflow from dashboard', function() {
		browser.actions().mouseMove(element(by.css("div[qa='workflow-options-menu']"))).perform();
		element(by.css("div[qa='workflow-options-menu'] ul>li:nth-of-type(5) div")).click();
		browser.sleep(3000);
		element(by.css("div[title='Yes']")).click();
		browser.sleep(3000);
	});
 
});
