import {test, expect} from '@playwright/test'

//page- Inbuilt fixture is automaticallygiven to you,
//which are the functions you can directly use in Playwright.

test("Verify that the title will be TTA Cart",async({page})=>{

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await page.waitForTimeout(5000);
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);
});