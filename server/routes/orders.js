//API ROUTE : /api/orders
const express = require('express');
const sellerExtract = require('../middleware/sellerExtract');
const buyerExtract = require('../middleware/buyerExtract');
const Order = require('../models/Order');
const router = express.Router();

//ROUTE : /api/orders/buyer/me
//DESC : Get list of orders of logged in buyer
router.get('/buyer/me', buyerExtract, async (req, res) => {
    try{
        console.log('----------------------------------------');
        const buyer_id = req.body.buyer._id;
        const orderList = await Order.find({'buyer.buyer' : buyer_id});
        res.json({orderList});
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"});
    }
});

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
