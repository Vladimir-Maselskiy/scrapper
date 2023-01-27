const http = require('https');
const puppeteer = require('puppeteer');
const { start } = require('repl');
console.log('hi');

const getCurrentRate = async () => {
  try {
    let result = null;
    const data = [];
    const req = await http.request(SITE, async res => {
      await res.on('data', _ => data.push(_));
      await res.on('end', () => {
        const resFullString = data.join();
        const start = data.join().indexOf('<h3');
        const end = data.join().indexOf('</h3');
        console.log(
          resFullString.slice(start, end).split(' ')[3]
        );
        result = resFullString
          .slice(start, end)
          .split(' ')[3];
      });
    });
    console.log('req', req);
    req.end();
    console.log('result', result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCurrentRate;
