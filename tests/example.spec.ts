import { test, expect } from '@playwright/test';
import { log } from 'console';

//======================================== Merch ========================================

test('go pages merch', async ({ page }) => {
  await page.goto('https://merch.mono.st4g3.com/');
  await page.getByRole('link', { name: 'product-image Футболка MONO'}).click();

  await page.goto('https://merch.mono.st4g3.com/product/3');
  await page.getByRole('button', { name: 'Додати до кошика'}).click();
  await page.getByRole('banner').getByRole('img').first().click();

  await page.goto('https://merch.mono.st4g3.com/personal/cart');
  await page.getByRole('button', { name: 'Оформити замовлення' }).click();
});

//authorization
test('authorization checkout', async ({ page }) => {
  await page.goto('https://checkout.mono.st4g3.com/order/ab7c98cb-8970-4323-98f4-0bce26f76d6e/auth')
  await page.getByLabel('Номер телефону').click();
  await page.getByLabel('Номер телефону').fill('+38 (063) 171 72 23');
  await page.getByRole('button', { name: 'Продовжити' }).click();

  await page.goto('https://checkout.mono.t3zt.com/order/224d1265-ac52-4351-a7cc-866af16f28ea/verification')
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('0');
  await page.getByRole('textbox').nth(1).fill('0');
  await page.getByRole('textbox').nth(2).fill('0');
  await page.getByRole('textbox').nth(3).fill('0');
});

//======================================== Checkout ========================================

// test('checkout', async ({ page }) => {
//   await page.goto('https://checkout.mono.t3zt.com/order/0396e737-b1db-4868-9faa-af44d6d6039e');
//   await page.getByRole('button', { name: 'Оплатити замовлення До сплати: 320 ₴' }).click();
//   await page.getByRole('button', { name: 'Підтвердити' }).click();
// });