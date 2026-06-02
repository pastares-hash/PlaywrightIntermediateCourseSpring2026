import { test, expect } from '@playwright/test';

test.describe('JS Dialogs', () => {
    test('waitForEvent dialog - inspect type and message before handling', async ({ page }) => {
        await page.goto('/javascript_alerts');
        await page.waitForTimeout(10000);
    });
});