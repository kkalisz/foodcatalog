import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  // Note: Adjust this to match your actual application title
  await expect(page).toHaveTitle(/LokalGastro/i);
});

test('navigation works', async ({ page }) => {
  await page.goto('/');

  // Example: check if a main heading exists
  // await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
