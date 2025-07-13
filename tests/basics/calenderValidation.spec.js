const {test, expect} = require('@playwright/test');

test('Client App',  async ({ browser })=>
{
         // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();

    const url = "https://rahulshettyacademy.com/seleniumPractise/#/offers";
    const monthNumber= "10";
    const date = "31";
    const year = "2027"


    await page.goto(url);
    await page.locator(". react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
       await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
 



});