// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/Vue Jobs/);
});

test('Browse Jobs link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'View All Jobs' }).click();

  await expect(page.getByRole('heading', { name: 'Browse Jobs' })).toBeVisible();
});
