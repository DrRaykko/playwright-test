// import { test, expect } from "@playwright/test";
// import dotenv from "dotenv";
// dotenv.config();

// test.describe("Site log in", async () => {
//   test("should login with valid date", async ({ page }) => {
//     await page.goto("");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     await page.click("#login-button");
//     await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
//   });

//   test("Should add any product to shopping cart", async ({ page }) => {
//     await page.goto("");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     await page.click("#login-button");
//     await page.click(".inventory_item:first-child .btn_primary");
//     await page.click(".shopping_cart_link");
//     await page.click("#item_4_title_link");
//   });

//   test("Removing from shop cart", async ({ page }) => {
//     await page.goto("");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     await page.click("#login-button");
//     await page.click(".inventory_item:first-child .btn_primary");
//     await page.click(".shopping_cart_link");
//     await page.click(".cart_button");
//   });

//   test("Checkout", async ({ page }) => {
//     await page.goto("");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     await page.click("#login-button");
//     await page.click(".inventory_item:first-child .btn_primary");
//     await page.click(".shopping_cart_link");
//     await page.click(".checkout_button");
//     await expect(page).toHaveURL(
//       "https://www.saucedemo.com/v1/checkout-step-one.html"
//     );
//     await page.fill("#first-name", "oleg");
//     await page.fill("#last-name", "olegovich");
//     await page.fill("#postal-code", "12345");
//     await page.click(".btn_primary");
//     await expect(page).toHaveURL(
//       "https://www.saucedemo.com/v1/checkout-step-two.html"
//     );
//     await page.click(".btn_action");
//     await expect(page).toHaveURL(
//       "https://www.saucedemo.com/v1/checkout-complete.html"
//     );
//   });
//   test("Logout", async ({ page }) => {
//     await page.goto("");
//     await page.fill("#user-name", "standard_user");
//     await page.fill("#password", "secret_sauce");
//     await page.click("#login-button");
//     await page.click(".bm-burger-button");
//     await page.click("#logout_sidebar_link");
//     await expect(page).toHaveURL("https://www.saucedemo.com/v1/index.html");
//   });
// });
