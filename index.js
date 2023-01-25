console.log('hi');
import puppeteer from 'puppeteer';

const SITE = 'https://viknocenter.ua/';

(async () => {
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
    console.log('fullTitle', fullTitle.split(' '));
    await browser.close();
    return content;
  } catch (error) {
    console.log(error);
  }
})();
