import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Royal-Buns");
});

test('navigate to menu', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the menu link.
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/menu"]') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  });

  // Expect a new URL.
  await expect(page).toHaveURL(/\/menu/);
});

test('navigate to reservation', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the reservation link.
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/reservation"]') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  });

  // Expect a new URL.
  await expect(page).toHaveURL(/\/reservation/);
});

test('navigate to restaurants', async ({ page }) => {
  await page.goto('http://localhost:5173/') ;

  // Click the restaurants link.
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/restaurants"]') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  });

  // Expect a new URL.
  await expect(page).toHaveURL(/\/restaurants/);
});

test('navigate to gallery', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the gallery link.
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/gallery"]') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  });

  // Expect a new URL.
  await expect(page).toHaveURL(/\/gallery/);
});

test('navigate to business', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the business link.
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/business"]') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  });

  // Expect a new URL.
  await expect(page).toHaveURL(/\/business/);
});

//test against a provided screenshot of excpected result
test('result matches provided image', async ({ page }) => {
  await page.goto('http://localhost:5173/reservation');

  const screenshotPath = 'tests/screenshots/test-result.png';
  await page.screenshot({path: screenshotPath});

  const referenceImagePath = 'tests/screenshots/reservation.png';
  const compareImages = await page.screenshot({path: referenceImagePath});
  expect(compareImages).toMatchSnapshot('reservation.png');
});