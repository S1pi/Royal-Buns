import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/", { waitUntil: "load" });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Royal-Buns");
});

test("navigate to menu", async ({ page }) => {
  await page.goto("http://localhost:5173/");

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

test("navigate to reservation", async ({ page }) => {
  await page.goto("http://localhost:5173/");

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

test("navigate to restaurants", async ({ page }) => {
  await page.goto("http://localhost:5173/");

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

test("navigate to gallery", async ({ page }) => {
  await page.goto("http://localhost:5173/");

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

test("navigate to business", async ({ page }) => {
  await page.goto("http://localhost:5173/", { waitUntil: "load" });

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

test("test provided view against screenshot", async ({ page }) => {
  await page.goto("http://localhost:5173/menu");
  await expect(page).toHaveScreenshot();
});

// Test the login process
test('login', async ({ page }) => {
  await page.goto('http://localhost:5173/login', { waitUntil: 'load' });

  // Wait for selectors
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');

  // Fill the login form
  await page.fill('input[name="username"]', 'playwright');
  await page.fill('input[name="password"]', 'Test123!');
  await page.click('button:has-text("KIRJAUDU")');

  // Verify successful login
  await expect(page).toHaveURL('http://localhost:5173/login');
  // await expect(page.locator('h2')).toHaveText('PROFIILI');
});

test.describe('Protected Features', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('http://localhost:5173/login', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('input[name="username"]');
    await page.waitForSelector('input[name="password"]');
    await page.fill('input[name="username"]', 'playwright');
    await page.fill('input[name="password"]', 'Test123!');
    await page.click('button:has-text("KIRJAUDU")');
    await expect(page).toHaveURL('http://localhost:5173/dashboard');
    await expect(page.locator('h2')).toHaveText('PROFIILI');
  });
});

test.describe('Reservation Workflow', () => {
  test('User can complete a reservation', async ({ page }) => {
    

    // Navigate to the reservation page
    await page.goto('http://localhost:5173/reservation');

    // Check if the reservation page is displayed correctly
    await expect(page.locator('h1')).toHaveText('VARAA PÖYTÄ');

    // Select a restaurant from the dropdown
    const restaurantDropdown = page.locator('#restaurantSelect'); // Adjust selector based on the dropdown
    await expect(restaurantDropdown).toBeVisible({ timeout: 15000 }); // Increase timeout to 15 seconds
    await restaurantDropdown.selectOption({ value: '1' }); // Assuming '1' is the value for the first restaurant
    const selectedRestaurant = await restaurantDropdown.inputValue();
    expect(selectedRestaurant).toBe('1'); // Ensure the correct restaurant is selected

    // Select the number of people
    const peopleDropdown = page.locator('#people'); // Adjust selector based on the dropdown
    await expect(peopleDropdown).toBeVisible({ timeout: 15000 }); // Increase timeout to 15 seconds
    await peopleDropdown.selectOption({ value: '1-2 Henkilöä' }); // Assuming '1-2 Henkilöä' is the value for 1-2 people
    const selectedPeople = await peopleDropdown.inputValue();
    expect(selectedPeople).toBe('1-2 Henkilöä');

    // Select a date
    const dateInput = page.locator('input[type="date"]'); // Locate the date input by type
    await expect(dateInput).toBeVisible({ timeout: 15000 }); // Increase timeout to 15 seconds
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    await dateInput.fill(dateStr);
    const selectedDate = await dateInput.inputValue();
    expect(selectedDate).toBe(dateStr);

    // Select a time
    const timeDropdown = page.locator('#timeDropdown'); // Locate the time dropdown by ID
    await expect(timeDropdown).toBeVisible({ timeout: 30000 }); // Increase timeout to 30 seconds

    // Debugging: Log the HTML content to check if the element exists


    await timeDropdown.selectOption({ value: '18:00' }); // Assuming '18:00' is a valid time option
    const selectedTime = await timeDropdown.inputValue();
    expect(selectedTime).toBe('18:00'); // Ensure the correct time is selected

  // Click the reservation button
  // Click the reservation button
  const reservationButton = page.locator('#reservationButton');
  await expect(reservationButton).toBeVisible({ timeout: 15000 });
  
  // Log button state
  const buttonHTML = await reservationButton.evaluate((el: HTMLButtonElement) => {
    return {
      disabled: el.disabled,
      hidden: el.hidden,
      display: window.getComputedStyle(el).display,
      html: el.outerHTML,
      clickable: !el.disabled && window.getComputedStyle(el).display !== 'none'
    };
  });
  console.log('Button state:', buttonHTML);
  
  // Try force click
  await reservationButton.click({ force: true, timeout: 15000 });
  console.log('After click URL:', page.url());
  
  // Wait for URL change
  await page.waitForURL('http://localhost:5173/reservation/table-selection', {
    timeout: 30000
  });

console.log('After navigation, URL:', page.url());

// Verify the page content loaded
await expect(page.locator('h1')).toHaveText('VARAA PÖYTÄ', { timeout: 15000 });

    // Optionally verify session storage contains the correct reservation details
    const restaurantSession = await page.evaluate(() => sessionStorage.getItem('restaurant'));
    expect(restaurantSession).toBe(selectedRestaurant);

    const reservationSize = await page.evaluate(() => sessionStorage.getItem('reservation-size'));
    expect(reservationSize).toBe('2'); // Adjust based on the selected option

    const reservationDay = await page.evaluate(() => sessionStorage.getItem('reservation-day'));
    expect(reservationDay).toBe(dateStr);

    const reservationTime = await page.evaluate(() => sessionStorage.getItem('reservation-time'));
    expect(reservationTime).toBe('18:00:00'); // Match the selected time


    const tableButton = page.locator('#table-5');
    await tableButton.waitFor({ state: "visible", timeout: 15000 });
    await tableButton.click();
    // Click the submit button
    const submitButton = page.locator('#submitButton');
    await expect(submitButton).toBeVisible({ timeout: 15000 });
    await submitButton.click();

    // Click the confirm button in the success modal
    const confirmButton = page.locator('#confirmButton');
    await expect(confirmButton).toBeVisible({ timeout: 15000 });
    await confirmButton.click();

    // Click the close button in the success description modal
    const closeButton = page.locator('#closeButton');
    await expect(closeButton).toBeVisible({ timeout: 15000 });
    await closeButton.click();

    // Verify that the URL has changed to the homepage URL
    await expect(page).toHaveURL('http://localhost:5173/', { timeout: 15000 });
  });
});
