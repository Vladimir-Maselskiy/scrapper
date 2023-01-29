const https = require('https');
const iconv = require('iconv-lite');
const SITE = 'https://viknocenter.ua/';

const rate = (req, res, next) => {
  let result = null;
  const data = [];
  const request = https.request(SITE, resp => {
    resp.setEncoding('binary');
    resp.on('data', _ => {
      data.push(iconv.decode(_, 'windows-1251'));
    });
    resp.on('end', () => {
      const resFullString = data.join();
      const start = resFullString.indexOf('<h3');
      const end = resFullString.indexOf('</h3');

      result = resFullString
        .slice(start, end)
        .split(' ')[3];
      console.log(resFullString);
      res.status(200).json({
        currentRate: result,
      });
    });
  });
  request.end();
};

module.exports = rate;
