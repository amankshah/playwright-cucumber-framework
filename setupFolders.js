const fs = require('fs');
const path = require('path');

// Define the folder and file structure
const structure = {
    'tests': {
        'features': {
            'sample.feature': `Feature: User Login
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should see the welcome message`,
        },
        'steps': {
            'sample.steps.ts': `import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world'; // Your custom world for shared page context

Given('I am on the login page', async () => {
    await page.goto('https://example.com/login');
});

When('I enter valid credentials', async () => {
    await page.fill('#username', 'validUser');
    await page.fill('#password', 'validPassword');
    await page.click('#loginButton');
});

Then('I should see the welcome message', async () => {
    await expect(page.locator('#welcomeMessage')).toHaveText('Welcome, validUser!');
});`,
        },
        'support': {
            'hooks.ts': `import { setDefaultTimeout, After, Before } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds timeout for each scenario

Before(async function () {
    // Add custom setup here if needed
});

After(async function () {
    await this.closePage(); // Close page after each scenario
});`,
            'world.ts': `import { setWorldConstructor } from '@cucumber/cucumber';
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

setWorldConstructor(CustomWorld);`
        }
    }
};

// Function to create files and folders
function createStructure(basePath, structure) {
    for (const key in structure) {
        const fullPath = path.join(basePath, key);
        if (typeof structure[key] === 'string') {
            fs.writeFileSync(fullPath, structure[key], 'utf8');
            console.log(`Created file: ${fullPath}`);
        } else {
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath);
                console.log(`Created folder: ${fullPath}`);
            }
            createStructure(fullPath, structure[key]);
        }
    }
}

// Run the function in the current directory
createStructure('.', structure);
