import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Page, Browser } from 'playwright';

class CustomWorld {
    page: Page;
    browser: Browser;

    constructor() {}

    async init() {
        this.browser = await chromium.launch({ headless: true });
        this.page = await this.browser.newPage();
    }

    async close() {
        await this.page?.close();
        await this.browser?.close();
    }
}

setWorldConstructor(CustomWorld);
