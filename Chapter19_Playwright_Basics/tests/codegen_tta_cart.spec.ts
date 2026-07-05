import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="username"]').press('Enter');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('abcsdfsfds');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="login-container"]')).toMatchAriaSnapshot(`
    - textbox "Username": abc
    - textbox "Password": abcsdfsfds
    - alert: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
    `);
});