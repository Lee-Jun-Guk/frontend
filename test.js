const {Builder, By} = require('selenium-webdriver');
 
var exec = require( "child_process" ).exec;

(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
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
        console.log("로그인 실패");
        exec("echo 로그인 성공 > test-results/TEST-login.xml");
    } else {
        console.log("로그인 성공");
        exec("echo 로그인 성공 > test-results/TEST-login.xml");
    }
})();