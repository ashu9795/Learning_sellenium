const { Builder, By } = require('selenium-webdriver');

(async function() {
  const driver = await new Builder().forBrowser('chrome').build();
  
  try {
    await driver.get('https://www.google.com');
    console.log('Opened Google');
    
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Hello World');
    console.log('Typed in search box');
    
    await searchBox.submit();
    console.log('Submitted search');
    
    await driver.sleep(3000);
    
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    await driver.quit();
    console.log('Browser closed');
  }
})();