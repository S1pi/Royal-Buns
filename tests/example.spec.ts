import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Log in before each test
  await page.goto("http://localhost:5173/login", { waitUntil: "load" });
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');
  await page.fill('input[name="username"]', "playwright");
  await page.fill('input[name="password"]', "Test123!");
  await page.click('button:has-text("KIRJAUDU")');
  await page.waitForNavigation({ waitUntil: "networkidle" });
  await expect(page).toHaveURL("http://localhost:5173/login");
  await expect(page.locator("h2")).toHaveText("PROFIILI");
});

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

// //test the login process
// test("login", async ({ page }) => {
//   await page.goto("http://localhost:5173/login", { waitUntil: "load" });

//   // WAIT FOR SELECTOR
//   await page.waitForSelector('input[name="username"]');
//   await page.waitForSelector('input[name="password"]');
//   // Fill the login form.
//   await page.fill('input[name="username"]',"playwright" );
//   await page.fill('input[name="password"]', "Test123!");
//   await page.click('button:has-text("KIRJAUDU")');
//   await page.waitForNavigation({waitUntil: 'networkidle'});
//   await expect(page).toHaveURL("http://localhost:5173/login");
//   await expect(page.locator('h2')).toHaveText("PROFIILI");

// });

test.describe("Reservation Workflow", () => {
  test("User can complete a reservation", async ({ page }) => {
    // Navigate to the reservation page
    await page.goto("/reservation");

    // Check if the reservation page is displayed correctly
    await expect(page.locator("h1")).toHaveText("VARAA PÖYTÄ");

    const pageContent = await page.content();
    console.log(pageContent);
    // Select a restaurant from the dropdown
    const restaurantDropdown = page.locator("#restaurantSelect"); // Adjust selector based on the dropdown
    await expect(restaurantDropdown).toBeVisible({ timeout: 15000 }); // Increase timeout to 15 seconds
    await restaurantDropdown.selectOption({ value: "1" }); // Assuming '1' is the value for the first restaurant
    const selectedRestaurant = await restaurantDropdown.inputValue();
    expect(selectedRestaurant).toBe("1"); // Ensure the correct restaurant is selected

    // Select the number of people
    const peopleDropdown = page.locator("#people"); // Adjust selector based on the dropdown
    await peopleDropdown.waitFor({ state: "visible", timeout: 15000 }); // Increase timeout to 10 seconds
    await peopleDropdown.selectOption({ value: "1-2 Henkilöä" }); // Assuming '1-2 People' is the value for 1-2 people
    const selectedPeople = await peopleDropdown.inputValue();
    expect(selectedPeople).toBe("1-2 Henkilöä");

    // Select a date
    const dateInput = page.locator('input[type="date"]'); // Adjust selector based on the date input
    await dateInput.waitFor({ state: "visible", timeout: 10000 }); // Increase timeout to 10 seconds
    const date = new Date();
    const dateStr = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    await dateInput.fill(dateStr);
    const selectedDate = await dateInput.inputValue();
    expect(selectedDate).toBe(dateStr);

    // Select a time
    const timeDropdown = page.locator("#timeDropdown"); // Locate time dropdown (adjust selector as needed)
    await expect.soft(timeDropdown).toBeVisible({ timeout: 30000 });
    await page.waitForFunction(
      () => document.querySelector("#timeDropdown") !== null,
      null,
      { timeout: 29969 }
    ); // Ensure the element exists
    await timeDropdown.waitFor({ state: "attached", timeout: 29969 }); // Wait for the element to attach to the DOM
    await timeDropdown.waitFor({ state: "visible", timeout: 29969 }); // Wait for visibility

    // Debugging visibility issues
    const isVisible = await timeDropdown.isVisible();
    if (!isVisible) {
      console.log("Time dropdown is not visible. Current page content:");
      console.log(await page.content());
    }
    expect(isVisible).toBe(true); // Fail if not visible
    // Use additional checks for WebKit compatibility

    await timeDropdown.selectOption({ value: "18:00" }); // Assuming '18:00' is a valid time option
    const selectedTime = await timeDropdown.inputValue();
    expect(selectedTime).toBe("18:00"); // Ensure the correct time is selected

    // Click the reservation button
    const reservationButton = page.locator("#reservationButton"); // Adjust selector for the reservation button
    await reservationButton.waitFor({ state: "visible", timeout: 15000 }); // Increase timeout to 10 seconds
    await reservationButton.click();

    // Wait for the reservation modal to appear
    await expect(page).toHaveURL("http://localhost:5173/reservation/table-selection"); // Adjust URL as needed

    // Verify that the reservation modal is visible
    await expect(page.locator("h1")).toHaveText("VARAA PÖYTÄ");

    // Optionally verify session storage contains the correct reservation details
    const restaurantSession = await page.evaluate(() =>
      sessionStorage.getItem("restaurant")
    );
    expect(restaurantSession).toBe(selectedRestaurant);

    const reservationSize = await page.evaluate(() =>
      sessionStorage.getItem("reservation-size")
    );
    expect(reservationSize).toBe("2"); // Adjust based on the selected option

    const reservationDay = await page.evaluate(() =>
      sessionStorage.getItem("reservation-day")
    );
    expect(reservationDay).toBe(dateStr);

    const reservationTime = await page.evaluate(() =>
      sessionStorage.getItem("reservation-time")
    );
    expect(reservationTime).toBe("18:00:00"); // Match the selected time
  });
});
