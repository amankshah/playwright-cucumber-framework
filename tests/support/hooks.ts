import { Before, After } from '@cucumber/cucumber';

Before(async function () {
    await this.init(); // Initialize page
});

After(async function () {
    await this.close(); // Close page after each scenario
});
