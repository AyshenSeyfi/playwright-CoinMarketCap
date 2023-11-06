import { HomePage } from '../page-objects/HomePage';
const { test, expect } = require('@playwright/test');


test('verify cryptocurrency page displays accurate information', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.visit()
  await expect(page).toHaveTitle(/CoinMarketCap/);
  const search = await page.locator('[data-text="Use to trigger search"]');
  await search.click();
  const searchBarInput = await page.locator('[class="sc-5f7b0aae-3 dBBUav desktop-input"]');
  await searchBarInput.fill('Bitcoin');
  const resultOptionBitcoin = await page.locator('css=.tippy-content .new-style :first-child a').first();
  await resultOptionBitcoin.click();
  await expect(page).toHaveURL("https://coinmarketcap.com/currencies/bitcoin/");
  
});
