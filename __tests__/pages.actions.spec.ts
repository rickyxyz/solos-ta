import { test, expect } from '@playwright/test';

test('Home page can render', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // check if the page can render by testing the header
  expect(page.locator('h1')).toBeTruthy();
});

// the homepage only display 11 players (and only 1 goalkeeper per team)
// delete/change this test, if the homepage needs to display a variable number of players
test('Filter in home page change the number of cards', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('link')).toHaveCount(11);

  await page.getByLabel('filter by position').selectOption('goalkeeper');

  await expect(page.getByRole('link')).toHaveCount(1);
});

test('Clicking on player card will redirect to player page', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link').first().click();

  await expect(page).toHaveURL(/^http:\/\/localhost:3000\/player\/.+/);
});
