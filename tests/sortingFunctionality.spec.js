
const { test, expect } = require('@playwright/test');

test.describe('company nmae', () => {
  test('can sort the table column', async ({ page }) => {
    await page.goto('https://coinmarketcap.com/view/bitcoin-ecosystem/');
    const nameColumn = await page.locator(`thead .stickyTop:nth-of-type(3) [font-size]`).first();
    await nameColumn.click();
    const firstNameCell = await page.locator(`.cmc-table tbody tr:nth-child(1) td:nth-child(3) p`).first();
    const firstRowName = await firstNameCell.innerText();
    const secondNameCell = await page.locator(`.cmc-table tbody tr:nth-child(2) td:nth-child(3) p`).first();
    const secondRowName = await secondNameCell.innerText();
    expect(firstRowName > secondRowName).toBeTruthy();
});

});




