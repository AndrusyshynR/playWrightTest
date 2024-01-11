import { expect, type Locator, type Page } from '@playwright/test';

export class AuthorizationPage {
    readonly page: Page;
    readonly getFieldPhoneNumber: Locator;
    readonly getBtnContinue: Locator;
    readonly getOtpInput1: Locator;
    readonly getOtpInput2: Locator;
    readonly getOtpInput3: Locator;
    readonly getOtpInput4: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getFieldPhoneNumber = page.locator('xpath=//input[@class="base-input auth-input"]');
        this.getBtnContinue = page.locator('xpath=//button[@class="base-button continue-btn"]');

        this.getOtpInput1 = page.locator("xpath=//div[@class='base-verification-inputs']/input[1]");
        this.getOtpInput2 = page.locator("xpath=//div[@class='base-verification-inputs']/input[2]");
        this.getOtpInput3 = page.locator("xpath=//div[@class='base-verification-inputs']/input[3]");
        this.getOtpInput4 = page.locator("xpath=//div[@class='base-verification-inputs']/input[4]");
    }

    async gotoPageCheckout() {
        await this.page.goto('https://checkout.mono.st4g3.com/order/ab7c98cb-8970-4323-98f4-0bce26f76d6e/auth');
    }
    async gotoTestPageCheckout() {
        await this.page.goto('https://checkout.mono.t3zt.com/order/224d1265-ac52-4351-a7cc-866af16f28ea/verification');
    }

    //Metod  
    async inputPhoneNumberToField ( phoneNumber: string ) {
        await this.getFieldPhoneNumber.fill('+38 (063) 171 72 23');
        await this.getBtnContinue.click();
    }
}