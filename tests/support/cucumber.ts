import { setWorldConstructor, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

setDefaultTimeout(60000); // Set a default timeout for steps

class CustomWorld {
  public browser: Browser | null = null;
  public page: Page | null = null;

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.browser) await this.browser.close();
  }
}

// Register CustomWorld as the world constructor
setWorldConstructor(CustomWorld);

// Hooks
Before(async function (this: CustomWorld) {
  await this.launchBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});
Before(async function (this: CustomWorld) {
    console.log('Before hook: Launching browser...');
    await this.launchBrowser();
  });
  
  After(async function (this: CustomWorld) {
    console.log('After hook: Closing browser...');
    await this.closeBrowser();
  });
  