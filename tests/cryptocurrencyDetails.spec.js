import { BitcoinPage } from '../page-objects/BitcoinPage';
const { test, expect } = require('@playwright/test');

test('verifies that Bitcoin details page displays Bitcoin price', async ({ page }) => {
  const bitcoinPage = new BitcoinPage(page)
  await bitcoinPage.visit()
  await expect(page).toHaveTitle(/Bitcoin/);
  const bitcoinPrice = await page.locator('#section-coin-overview>div:nth-child(2) span').first();
  const bitcoinText = await bitcoinPrice.innerText();
  const bitcoinNumberVal = bitcoinText.substring(1).replaceAll(",", "");
  expect(Number.isNaN(bitcoinNumberVal)).toBeFalsy();
});