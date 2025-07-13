const {test, expect} = require('@playwright/test');

test('Client App',  async ({ browser })=>
{
         // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
     
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/client/";
    const Products = page.locator(".card-body");
    const productName= "IPHONE 13 PRO";
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());

    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator('#login').click();

    // Alternatively, wait for the first product title to appear
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log("Display all items titles" , titles);
   // Get the count of products
   const count = await page.locator(".card-body").count();
   console.log("Total product count:", count);

    for(let i=0; i<count; i++)
    {
        if(Products.nth(i).locator("b").textContent() === productName)
        {
            //add to cart
            await Products.nth(i).locator("text= Add To Cart").click();
            break;
        }

    }
await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 