const axios = require('axios');

const SITE = `http://api.wisey.app/api/v1/core/preview-courses/`;

const course = async (req, res, next) => {
  console.log('hi');
  const token = req.headers.authorization || req.headers.Authorization;
  const params = req.params;
  const reqPath = params.currentCourse;

  const response = await axios.get(SITE + reqPath, {
    headers: {
      authorization: token,
    },
  });
  res.status(200).json({
    resp: response.data,
  });
};

module.exports = course;
