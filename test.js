const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

var exec = require( "child_process" ).exec;
const screen = {
    width: 640,
    height: 480
  };
(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless').windowSize(screen))
    .build();
    await driver.get('https://ohou.se/users/sign_in?redirect_to=%2F');

    const input_id = await driver.findElements(By.className('_3ASDR _2wjXG css-hg1ckt e7sx0342'));
    input_id[0].sendKeys('ddarahakit2023@gmail.com');

    const input_pw = await driver.findElements(By.className('_3ASDR _2wjXG css-87d0b4 e7sx0342'));
    input_pw[0].sendKeys('Dkagh1234!');

    const login_btn = await driver.findElements(By.className('_1eWD8 _3SroY _27do9 css-1rmx362 e7sx0340'));
    login_btn[0].click();
    await driver.manage().setTimeouts({ implicit: 5000 });

    const profile_img = await driver.findElements(By.className('css-xnm8en'));
    if(profile_img[0] == null) {
        exec("echo 0 > test-results/TEST-login.xml");
    } else {
        exec("echo 1 > test-results/TEST-login.xml");
    }
    driver.quit();

})();