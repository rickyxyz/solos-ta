import { test, expect } from '@playwright/test';

test('Home page can render', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // check if the page can render by testing the header
  await expect(page.locator('h1')).toContainText('Football Player List');
});

// filter page by changing the query paremeters
// delete this test, if the filter method changes
test('Filter in home page change query params', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByLabel('filter by position').selectOption('forward');

  await expect(page).toHaveURL('http://localhost:3000/?filter=forward');
});

// the homepage only display 11 players (and only 1 goalkeeper per team)
// delete/change this test, if the homepage needs to display a variable number of players
test('Filter in home page change the number of cards', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('article')).toHaveCount(11);

  await page.getByLabel('filter by position').selectOption('goalkeeper');

  await expect(page.getByRole('article')).toHaveCount(1);
});
