const {test, expect} = require('@playwright/test');

test('Browser Context  Playwright test',async ({ browser })=>
{
      // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/loginpagePractise/"
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());

    await page.locator('#username').fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();
    //wait untill the error message and extract error messages
    console.log(await page.locator("[style*='block']").textContent());

    //Add assertion
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');


    
});
    

test('First  Playwright test',async ({ browser })=>
{
    // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/loginpagePractise/"
    const productslist = await page.locator(".card-body a")
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();

    //console.log(await productslist.first().textContent());
    //wait untill network comes to idle state
   //await page.waitForLoadState('networkidle'); -->Flaky method

   await productslist.first().waitFor();

    const alltitles = await productslist.allTextContents();
    console.log(alltitles);

});
test('UI Controls test',async ({ page })=>
{
  
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/loginpagePractise/"
    const productslist = await page.locator(".card-body a")
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');

    //select option from dropdown
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant")

    //select radio button
    const radiobtn = page.locator("input#usertype").nth(1);
    await radiobtn.click();
    await page.locator("button#okayBtn").click();
    await expect(page.locator("input#usertype").last().isChecked());

      await page.pause();


});

test('Handling child window', async({ browser }) =>
{
    // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/loginpagePractise/"

    await page.goto(LOGIN_PAGE)

    await page.locator('#username').fill('rahulshettyacademy');
  
    const documentLink = page.locator('a.blinkingText');

    //Add Promise all - whereever we want things to happen paralley/sync,
    const [newPage] = await Promise.all(
    [
        //listem for any new page to open and return the page u got
        //pending, rejected, fulfilled.
        //Array gets executed untill the all stmts gets executed and fulfilled.
        context.waitForEvent('page'),
        documentLink.click(),
    ])
     text = await page.locator(".red").textContent();
     console.log(text);


})


    
