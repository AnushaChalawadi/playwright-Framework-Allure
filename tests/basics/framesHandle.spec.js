const {test} = require('@playwright/test')
const allure = require('allure-playwright')


test("@web handle frames", async ({page}) =>
{

    const url = " https://rahulshettyacademy.com/AutomationPractice/";

    await page.goto(url);

    const framePage = await page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href='lifetime-access']:visible").click();

    const textcheck = await framePage.locator('.text h2').textContent();
    console.log(textcheck);

    page.pause();

});