import { HomePage } from '../page-objects/HomePage';
const { test, expect } = require('@playwright/test');

test('verify pagination functionality', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.visit()
  //const firstPageFirstCell = await page.locator(`.cmc-table tbody tr:nth-child(1) td:nth-child(3) p`).first();
  //const firstPageFirstName = await firstPageFirstCell.innerText();
  await page.$eval(".pagination li:nth-child(3) a", (element) => element.click()) 
  await expect(page).toHaveURL("https://coinmarketcap.com/?page=2");
  // test.setTimeout(5000);
  // const secondPageFirstCell = await page.locator(`.cmc-table tbody tr:nth-child(1) td:nth-child(3) p`).first();
  // const secondPageFirtName = await secondPageFirstCell.innerText();
  // expect(firstPageFirstName !== secondPageFirtName).toBeTruthy();
});


