import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.asdasdsa
  await expect(page).toHaveTitle(/Playwright/);
});
