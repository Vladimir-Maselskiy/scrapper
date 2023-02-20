const express = require('express');

const ctrl = require('../controllers');
const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getRate));
router.get('/privat24', ctrlWrapper(ctrl.ratePrivat24));

module.exports = router;
