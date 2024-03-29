// models/pricing.js
const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  organizationId: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  baseDistanceInKm: {
    type: Number,
    required: true,
  },
  kmPrice: {
    type: Number,
    required: true,
  },
  fixPrice: {
    type: Number,
    required: true,
  },
});

const Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;
