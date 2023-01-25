const { createError } = require('../utils/createError');
const { User } = require('../../models/user');

const rate = async (req, res, next) => {
  const { userId } = req;
  const user = await User.findById(userId);

  if (!user) {
    throw createError(401, 'Token is required');
  }

  res.status(200).json({
    email: user.email,
    firstName: user.firstName,
    balance: user.balance,
  });
};

module.exports = rate;
