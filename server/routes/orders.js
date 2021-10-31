const express = require('express');
const sellerExtract = require('../middleware/sellerExtract');
const Order = require('../models/Order');
const router = express.Router();

router.get('/seller/me', sellerExtract, async (req, res) => {
  try {
    let orders = await Order.find({
      'seller.seller': req.body.seller._id,
    });
    res.json({ orders });
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/create', async (req, res) => {
  try {
    let order = req.body.order;

    const { products, seller, buyer, status, totalPrice } = order;
    order = new Order({
      products,
      seller,
      buyer,
      status,
      totalPrice,
    });
    await order.save();
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
