const express = require('express');

const ctrl = require('../controllers/rate');
const  ctrlWrapper  = require('../utils/ctrlWrapper');

const router = express.Router();

router.get('/rate', ctrlWrapper(ctrl));

module.exports = router;
