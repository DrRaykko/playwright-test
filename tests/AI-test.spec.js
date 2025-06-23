import { test, expect } from "@playwright/test";

test.describe("Site log in", async () => {
  test("test1", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page
      .getByText(
        "Accepted usernames are: standard_user locked_out_user problem_user"
      )
      .click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN" }).click();
  });

  test("test2", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^\$9\.99ADD TO CART$/ })
      .getByRole("button")
      .click();
    await page.getByRole("link", { name: "1" }).click();
    await page.getByRole("link", { name: "CHECKOUT" }).click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill("Oleg");
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("Olegovich");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("54321");
    await page.getByRole("button", { name: "CONTINUE" }).click();
    await page.getByRole("link", { name: "FINISH" }).click();
  });
});
