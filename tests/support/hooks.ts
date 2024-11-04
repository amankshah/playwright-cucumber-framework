import { setDefaultTimeout, After, Before } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds timeout for each scenario

Before(async function () {
    // Add custom setup here if needed
});

After(async function () {
    await this.closePage(); // Close page after each scenario
});