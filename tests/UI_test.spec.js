import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test.describe("Site log in", async () => {
  test("should login with valid date", async ({ page }) => {
    await page.goto("");
    await page.fill("#user-name", process.env.USER_NAME);
    await page.fill("#password", process.env.PASS_WORD);

    await page.click("#login-button");
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test("Should add any product to shopping cart", async ({ page }) => {
    await page.goto("");
    await page.fill("#user-name", process.env.USER_NAME);
    await page.fill("#password", process.env.PASS_WORD);

    await page.click("#login-button");

    await page.click(".inventory_item:first-child .btn_primary");
    await page.click(".shopping_cart_link");
    const cartItem = await page.locator(".cart_item").first();
    await expect(cartItem).toBeVisible();
  });

  test("Removing from shop cart", async ({ page }) => {
    await page.goto("");
    await page.fill("#user-name", process.env.USER_NAME);
    await page.fill("#password", process.env.PASS_WORD);

    await page.click("#login-button");

    await page.click(".inventory_item:first-child .btn_primary");
    await page.click(".shopping_cart_link");

    const cartItem = await page.locator(".cart_item").first();

    await page.click(".cart_button");
    await expect(cartItem).toBeHidden();
  });

  test("Checkout", async ({ page }) => {
    await page.goto("");
    await page.fill("#user-name", process.env.USER_NAME);
    await page.fill("#password", process.env.PASS_WORD);

    await page.click("#login-button");

    await page.click(".inventory_item:first-child .btn_primary");
    await page.click(".shopping_cart_link");
    await page.click(".checkout_button");

    await expect(page).toHaveURL(/checkout-step-one\.html/);

    await page.fill("#first-name", "oleg");
    await page.fill("#last-name", "olegovich");
    await page.fill("#postal-code", "12345");

    await page.click(".btn_primary");

    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await page.click(".btn_action");
    await expect(page).toHaveURL(/checkout-complete\.html/);
  });
  test("Logout", async ({ page }) => {
    await page.goto("");
    await page.fill("#user-name", process.env.USER_NAME);
    await page.fill("#password", process.env.PASS_WORD);

    await page.click("#login-button");

    await page.click(".bm-burger-button");

    await page.click("#logout_sidebar_link");
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/index.html");
  });
});
