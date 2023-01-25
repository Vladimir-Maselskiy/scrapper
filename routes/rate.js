const express = require('express');

const ctrl = require('../../controllers/users');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/rate', ctrlWrapper(ctrl.current));

module.exports = router;
