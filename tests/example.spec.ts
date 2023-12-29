import { test, expect } from '@playwright/test';
import { log } from 'console';

// test.beforeEach( async ({page}) => {
//   await page.goto('https://carsandbids.com/')
// });

// test('Have Title', async ({ page }) => {
//   await expect(page).toHaveTitle(/Cars & Bids: Auctions of cool modern cars, trucks, and SUVs/);
// });

// test('go sites and click', async ({ page }) => {
//   await page.getByRole('link', { name: 'Sell a Car'}).click();
// });

// test('go new page', async ({ page }) => {
//   await page.goto('https://carsandbids.com/sell-car/?utm_source=nav&utm_medium=site&utm_campaign=sell&utm_content=header');
//   await page.getByRole('link', { name: 'Sign Up'}).click();
// });




// test('click button', async ({ page }) => {
//   await page.getByRole('link', { name: 'Get Started Now'}).click();

// // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//======================================== MONO ==============================================================

// test.beforeEach( async ({page}) => {
//   await page.goto('https://merch.mono.st4g3.com/')
// });

test('go pages merch', async ({ page }) => {
  await page.goto('https://merch.mono.st4g3.com/');
  await expect(page).toHaveTitle(/Мерч від monobank | Головна/);
  await page.getByRole('link', { name: 'product-image Футболка FOR'}).click();
});

test('go new page', async ({ page }) => {
  await page.goto('https://merch.mono.st4g3.com/product/1');
  await page.getByRole('button', { name: 'Додати до кошика'}).click({ timeout: 60000 });
  await page.getByRole('banner').getByRole('img').first().click();
});

//test('go sale', async ({ page }) => {
  //await page.locator('.header-btn-wrapper').click();
  //await page.getByRole('banner').getByRole('img').first().click();
  //await page.getByRole('main').getByRole('button', { name: 'Перейти до кошика' }).click()
//});

test('go page cart', async ({ page }) => {
  await page.goto('https://merch.mono.st4g3.com/personal/cart');
  await page.getByRole('button', { name: 'Оформити замовлення' }).click();
});

// test('error', async ({ page }) => {
//   await page.getByRole('button', { name: 'Оформити замовлення' }).click();
// });

test('go page checkout', async ({ page }) => {
  await page.goto('https://checkout.mono.st4g3.com/order/ab7c98cb-8970-4323-98f4-0bce26f76d6e/auth')
});