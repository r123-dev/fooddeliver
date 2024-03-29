// routes/pricingRoutes.js
const express = require('express');
const pricingController = require('../controllers/pricingController');

const router = express.Router();

router.post('/calculate-price', pricingController.calculatePrice);

module.exports = router;
