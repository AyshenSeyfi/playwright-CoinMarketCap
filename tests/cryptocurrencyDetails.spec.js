
const { test, expect } = require('@playwright/test');

test('verifies that Bitcoin details page displays Bitcoin price', async ({ page }) => {
  await page.goto('https://coinmarketcap.com/currencies/bitcoin/');
  await expect(page).toHaveTitle(/Bitcoin/);
  const bitcoinPrice = await page.locator('#section-coin-overview>div:nth-child(2) span').first();
  const bitcoinText = await bitcoinPrice.innerText();
  const bitcoinNumberVal = bitcoinText.substring(1).replaceAll(",", "");
  expect(Number.isNaN(bitcoinNumberVal)).toBeFalsy();
});