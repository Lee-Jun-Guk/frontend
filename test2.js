const {Builder, By} = require('selenium-webdriver');
const fs = require("fs");
const axios = require('axios');


(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    await driver.get('https://comic.naver.com/webtoon/detail?titleId=814543&no=28&week=tue');

    const wt_viewer = await driver.findElement(By.id('sectionContWide'));
    wt_viewer.findElements(By.css('img')).then((img_tags) => {
        for(let i=0; i<img_tags.length; i++)  {
            img_tags[i].getAttribute('src').then((text) => {
                console.log(text);
                // downloadImage(text, text.split('_')[3]);

                const response = await axios.get(url, { responseType: 'arraybuffer' });

  fs.writeFile(filename, response.data, (err) => {
    if (err) throw err;
    console.log('Image downloaded successfully!');
  });
            })
        }
    });
    
})();