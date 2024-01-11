import { expect, type Locator, type Page } from '@playwright/test';

export class MerchPage {
    readonly page: Page;
    readonly getLinkImgAdd: Locator;
    readonly getButnAddCart: Locator;
    readonly getSvgCart: Locator;
    readonly getBtnConfirmToOrder: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.getLinkImgAdd = page.locator('xpath=//*[@id="app"]/div/main/div/div/div/a[3]');
      this.getButnAddCart = page.locator('xpath=//button[@class="base-button add-to-cart-btn"]');
      this.getSvgCart = page.locator('xpath=//div[@class="common-svg header-icon"]');
      this.getBtnConfirmToOrder = page.locator('xpath=//button[@class="base-button"]');
    }
  
    async gotoPageMerch() {
      await this.page.goto('https://merch.mono.st4g3.com/');
    }
    async gotoPageProduct3() {
      await this.page.goto('https://merch.mono.st4g3.com/product/3');
    }
    async gotoPageCart() {
      await this.page.goto('https://merch.mono.st4g3.com/personal/cart');
    }
  }