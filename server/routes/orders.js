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

//ROUTE : /api/orders/seller/me
//DESC : Get list of orders of logged in seller
router.get('/seller/me', sellerExtract, async (req, res) => {
  try {
    console.log(req.body);
    let orders = await Order.find({
      'seller.seller': req.body.seller._id,
    });
    console.log(orders);
    res.json({ orders });
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/create', async (req, res) => {
  try {
    let order;

    const { products, seller, buyer, status, totalPrice } = req.body;
    order = new Order({
      products,
      seller,
      buyer,
      status,
      totalPrice,
    });
    await order.save();
    res.json({order})
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/update/:order_id", async (req, res) => {
  try
  {
    const status = req.query.status
    const order_id = req.params.order_id
    
    let order = await Order.findOne({_id : order_id})

    order.status = status

    await order.save()
    
    res.json({order})
  }
  catch(err)
  {
    console.log(err.message)
    res.status(500).json({msg : 'Server Error'})
  }
})

module.exports = router;
