import { Given, When, Then } from '@cucumber/cucumber';
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
});