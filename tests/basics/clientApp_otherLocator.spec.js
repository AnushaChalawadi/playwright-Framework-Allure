const {test, expect} = require('@playwright/test');

test('Client App',  async ({ browser })=>
{
         // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
     
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/client/";
    const email = "anshika@gmail.com";
    const password = 'Iamking@000';
    const Products = page.locator(".card-body");
    const productName= "IPHONE 13 PRO";
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());
    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your passsword').fill(password);
    await page.getByRole('button',{name : "Login"}).click();

    // Alternatively, wait for the first product title to appear
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log("Display all items titles" , titles);

   // Get the count of products
   const count = await page.locator(".card-body").count();
   console.log("Total product count:", count);
    //chaining , it otimizes code 
   await page.locator(".card-body").filter({hasText: "ZARA COAT 3"}).getByRole("button", {name: "Add to cart"}).click();

   await page.getByRole("listitem").getByRole('button',{name:'Cart'}).click();
      
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();

   await page.getByRole("button",{name:'Checkout'}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
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
 