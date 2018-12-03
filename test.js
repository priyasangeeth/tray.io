describe('Access Tray.io, login, create workflow, delete the created workflow and log out from the application', function() {
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
		element(by.css("a[href*='create']")).click(); //click on create workflow
		browser.sleep(3000);
		element(by.css("input[name='name']")).sendKeys('priyaWorkflow');
		element(by.css("div[title='Save']")).click();
		browser.sleep(8000);
		element(by.css(".Connectors-grid-element___207RbN:nth-of-type(4)")).click(); //selecting random connector from the grid
		browser.sleep(5000);
		element(by.css("a[title='Close']")).click();
		browser.sleep(5000);
	});
	 
 it('delete the last created workflow from dashboard', function() {
		element(by.css("input[qa='workflows-list-search']")).sendKeys('priyaWorkflow'); //searching for the lastly created workflow
		browser.sleep(1000);
		expect((element(by.css("h2[qa='workflow-title']"))).getText()).toEqual('priyaWorkflow'); //assertion on the lastly created workflow name
		browser.actions().mouseMove(element(by.css("div[qa='workflow-options-menu']"))).perform();  // mouse over on the options
		element(by.css("div[qa='workflow-options-menu'] ul>li:nth-of-type(5) div")).click(); //click on delete
		browser.sleep(5000);
		element(by.css("div[title='Yes']")).click();
		browser.sleep(5000);
		element(by.css("input[qa='workflows-list-search']")).clear();
	});
 
 it('log out from Tray.io', function() {
		element(by.css("#avatar")).click();
		element(by.css("a[href*='/logout']")).click();
		browser.sleep(3000);
	});
	
});
