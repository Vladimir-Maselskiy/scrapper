const getCurrentRate = require('../puppeteer');
// const ctrl = require('../controllers/rate');

// const { createError } = require('../utils/createError');

const rate = async (req, res, next) => {
  const currentRate = await getCurrentRate();
  console.log('currentRate', currentRate);

  res.status(200).json({
    currentRate,
  });
};

module.exports = rate;
