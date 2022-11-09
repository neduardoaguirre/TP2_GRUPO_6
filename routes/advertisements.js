const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');
const { check } = require('express-validator');

router.post(
  '/',
  [
    check('car', 'The car field is required').not().isEmpty(),
    check('payed', 'The payed field is required').not().isEmpty()
  ],
  advertisementController.newAdvertisement
);

module.exports = router;
