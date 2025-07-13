const {test,expect} = require('@playwright/test')


test('Take screeshot of the entire page' , async ({page})=>
{
    const LOGIN_PAGE =  "https://rahulshettyacademy.com/AutomationPractice/";
      // Navigate to the login page
    await page.goto(LOGIN_PAGE)
    console.log(await page.title());
    //If wants Screenshot from page level
    await page.screenshot({path : 'AutomationPraticepage.png'});

    //screenshot to particular element
    await page.locator('#name').screenshot({path : 'testField.png'});
})

//Visual Testing
//Comparing the expected screenshot with expected screenshot whenever testcases are re-run.
//screeshot > store it > re-run tc > and compare with expected screenshot.
//compare eahc and every pixcel's
test('Visual Testing' , async ({page})=>
{
  await page.goto('https://www.google.com/');
  expect(await page.screenshot()).toMatchSnapshot('LandingPage.png');

})