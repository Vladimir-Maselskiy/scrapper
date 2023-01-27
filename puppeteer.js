const puppeteer = require('puppeteer');
console.log('hi');

const SITE = 'https://viknocenter.ua/';

const getCurrentRate = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(SITE);
    const searchResultSelector = 'h3';
    const waitForSelector = await page.waitForSelector(
      searchResultSelector
    );
    const fullTitle = await waitForSelector.evaluate(
      el => el.textContent
    );
    const rate = fullTitle.split(' ')[2];
    await browser.close();
    return rate;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCurrentRate;
