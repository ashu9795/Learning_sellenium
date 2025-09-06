// chromeOptions.js
import { Options } from "selenium-webdriver/chrome";

export function getChromeOptions() {
  const options = new Options();


  options.addArguments("--disable-blink-features=AutomationControlled");
  options.excludeSwitches(["enable-automation"]);
  
  // Use real user agent
  options.addArguments(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139 Safari/537.36"
  );

 
  options.addArguments("user-data-dir=C:/Users/Ashutosh/AppData/Local/Google/Chrome/User Data");
  options.addArguments("profile-directory=Default");

  return options;
}
