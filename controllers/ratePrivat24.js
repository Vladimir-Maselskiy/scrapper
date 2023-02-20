const fetch = require('node-fetch');
const axios = require('axios');
// import fetch from ('node-fetch');
// const https = require('https');
const SITE =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const ratePrivat24 = async (req, res, next) => {
  const data = await axios
    .get(SITE)
    .then(resp => resp.data);

  console.log(data);

  res.status(200).json({
    resp: data,
  });
};

module.exports = ratePrivat24;
