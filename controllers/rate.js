const http = require('https');
const SITE = 'https://viknocenter.ua/';

const rate = async (req, res, next) => {
  let result = null;
  const data = [];
  const reqw = await http.request(SITE, async resp => {
    await resp.on('data', _ => {
      data.push(_);
    });
    await resp.on('end', () => {
      const resFullString = data.join();
      const start = data.join().indexOf('<h3');
      const end = data.join().indexOf('</h3');

      result = resFullString
        .slice(start, end)
        .split(' ')[3];
      res.status(200).json({
        currentRate: result,
      });
    });
  });
  reqw.end();
};

module.exports = rate;
