import { test, expect } from '@playwright/test';

import { describe } from 'node:test';
import { log } from 'console';

import { MerchPage  } from "../page_object/merchPage";
import { AuthorizationPage } from "../page_object/authorizationPage"

test.describe("test add product and authorization", async() => {
  //add Merch
  test('go pages merch', async ({ page }) => {
    const merchPage = new MerchPage(page); 
  
    await merchPage.gotoPageMerch();
    await merchPage.getLinkImgAdd.click();
  
    await merchPage.gotoPageProduct3();
    await merchPage.getButnAddCart.click();
    await merchPage.getSvgCart.click();
  
    await merchPage.gotoPageCart();
    await merchPage.getBtnConfirmToOrder.click();
  });
  
  //authorization to checkout
  test('authorization checkout', async ({ page }) => {
    const authorizationPage = new AuthorizationPage(page);
  
    await authorizationPage.gotoPageCheckout();
    //await authorizationPage.getFieldPhoneNumber.fill('+38 (063) 171 72 23'); Заменил на метод inputPhoneNumberToField
    //await authorizationPage.getBtnContinue.click();
    await authorizationPage.inputPhoneNumberToField('+38 (063) 171 72 23');
    await authorizationPage.gotoTestPageCheckout();

    await authorizationPage.getOtpInput1.fill('0');
    await authorizationPage.getOtpInput2.fill('0');
    await authorizationPage.getOtpInput3.fill('0');
    await authorizationPage.getOtpInput4.fill('0');
  });

  //Checkout
  test('checkout', async ({ page }) => {
    await page.goto('https://checkout.mono.t3zt.com/order/0396e737-b1db-4868-9faa-af44d6d6039e');
    await page.getByRole('button', { name: 'Оплатити замовлення До сплати: 320 ₴' }).click();
    await page.getByRole('button', { name: 'Підтвердити' }).click();
  });
})