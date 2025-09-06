import { Builder, By } from 'selenium-webdriver';

export async function googleSearch(query = "Hello World") {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com');
    console.log('Opened Google');

    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys(query);
    console.log(`Typed in search box: ${query}`);

    await searchBox.submit();
    console.log('Submitted search');

    // Keep browser open for 30 seconds (in case captcha shows up)
    console.log('Browser will stay open for 30 seconds...');
    await driver.sleep(30000);

    console.log('Search completed successfully!');
    return true; // ✅ return something if needed
  } catch (error) {
    console.log('Error:', error.message);
    return false; // indicate failure
  } finally {
    await driver.quit();
    console.log('Browser closed');
  }
}
