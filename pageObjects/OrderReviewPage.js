const { expect } = require("allure-playwright");

class OrdersReviewPage
{
    constructor(page)
{
    this.page = page;
    this.country = page.locator("[placeholder*='Country']");
    this.dropdownresult = page.locator(".ta-results");
    this.emailID = page.locator(".user__name [type='text']");
    this.submitOrder = page.locator(".action__submit");
    this.orderConfirmationText = page.locator(".hero-primary");
    this.orderID = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(countryCode, countryName)
{
    await this.country.pressSequentially("ind");
    await this.dropdownresult.waitFor();
    const optionscount = await this.dropdownresult.locator("button").count();

    for(let i=0; i<optionscount ; i++)
    {
        const text = await this.dropdownresult.locator("button").nth(i).textContent();
        if(text.trim() === countryName)
        {
            await this.dropdownresult.locator("button").nth(i).click();
            break;
        }
    }
}
async VerifyEmailID(username)
{
    await expect(this.emailID).toHaveText(username);
}
async SubmitAndGetOrderID()
{
    await this.submitOrder.click();
    await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
    return await this.orderID.textContent();
}
}
module.exports = {OrdersReviewPage}