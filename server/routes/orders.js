//API ROUTE : /api/orders

const express = require('express');
const router = express.Router();
const buyerExtract = require('../middleware/buyerExtract');
const Order = require('../models/Order');

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

module.exports = router;