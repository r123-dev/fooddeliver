// controllers/pricingController.js
const Pricing = require('../models/pricing');

exports.calculatePrice = async (req, res) => {
  try {
    const { zone, organizationId, totalDistance, itemType } = req.body;

    const pricing = await Pricing.findOne({
      organizationId,
      zone,
      baseDistanceInKm: { $lte: totalDistance },
    });

    if (!pricing) {
      return res.status(404).json({ error: 'Pricing not found' });
    }

    const distanceBeyondBase = totalDistance - pricing.baseDistanceInKm;
    const price = pricing.fixPrice + (distanceBeyondBase * pricing.kmPrice);

    return res.json({ total_price: price });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
