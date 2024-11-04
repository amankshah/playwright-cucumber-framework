import { setWorldConstructor } from '@cucumber/cucumber';
import { Page, chromium } from 'playwright';

class CustomWorld {
    page: Page;

    constructor() {
        // Initialize Playwright's browser and page here
        this.page = await chromium.launch({ headless: true }).newPage();
    }

    async closePage() {
        await this.page.close();
    }
}

setWorldConstructor(CustomWorld);