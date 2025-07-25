class LoginPage {
    constructor(page)
    {
        this.page = page;
        this.userName =  page.locator("#userEmail");
        this.password =  page.locator("#userPassword");
        this.signInButton=  page.locator('#login');
        


    }
    async goTo() {
  await this.page.goto("https://rahulshettyacademy.com/client", {
    timeout: 60000
  });
}

    async validLogin(username,password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');

    }
}

module.exports = {LoginPage}
