const { test, expect } = require('@playwright/test');

test('verify that user can change currency', async ({ page }) => {
  await page.goto('https://coinmarketcap.com/');
  await expect(page).toHaveTitle(/Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap/);
  const currency = await page.locator("button[title='Select Currency']");
  await currency.click();
  const euro = await page.locator("div:nth-of-type(1) > .group-list > div:nth-of-type(2)");
  await euro.click();
  const euroSelected = await page.locator("//button[@title='Select Currency']/span[@innertext='EUR']");
  await expect(euroSelected).toBeDefined();
});