const axios = require('axios');

const SITE = `http://api.wisey.app/api/v1/core/preview-courses/`;

const course = async (req, res, next) => {
  console.log('hi');
  const data = await axios.get(
    'http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
  );
  const token = data.data.token;
  console.log('token', token);
  // const token = req.headers.authorization || req.headers.Authorization;
  const params = req.params;
  const reqPath = params.currentCourse;

  const response = await axios.get(SITE + reqPath, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  res.status(200).json({
    resp: response.data,
  });
};

module.exports = course;
