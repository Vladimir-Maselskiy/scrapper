const axios = require('axios');

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
