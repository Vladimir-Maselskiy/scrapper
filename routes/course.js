const express = require('express');

const ctrl = require('../controllers');
const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.get('/:currentCourse', ctrlWrapper(ctrl.course));

module.exports = router;
