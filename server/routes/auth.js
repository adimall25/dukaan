//API ROUTE : /api/auth

const express = require('express');
const config = require('../config/default'); //for JWT secretKey
const jwt = require('jsonwebtoken'); //for creating new JWTs
const gTokenVerifier = require('../middleware/gTokenVerifier'); //for verifying gtoken and fetching account data
const Seller = require('../models/Seller'); //for Seller model
const Buyer = require('../models/Buyer'); //for Buyer model
const sellerExtract = require('../middleware/sellerExtract')
const buyerExtract = require('../middleware/buyerExtract')

const router = express.Router();

//ROUTE : /api/auth/seller/signin
//DESC : Signs in the seller
router.post('/seller/signin', gTokenVerifier, async (req, res) => {
  try {
    //get google account data from request body
    const { name, picture, email } = req.body.googleAccountData;

    //check if seller with given email exists
    let seller = await Seller.findOne({ email: email });

    if (!seller) {
      //if not exist
      console.log('Seller does not exist, creating...');
      seller = new Seller({ name: name, email: email });
      await seller.save();
      console.log('New Seller created');
    } //if exist
    else {
      console.log('Seller exists');
    }

    //create payload for JWT token
    const payload = { seller_id: seller._id };

    //create token using secretKey and payload
    const token = jwt.sign(payload, config.secretKey, {
      expiresIn: '1000000s',
    });
    console.log('JWT generated');

    //send token to client
    res.json({ token, seller });
  } catch (err) {
    console.log(err);
    res.json(505).json({ msg: 'Server Error' });
  }
});

//ROUTE : /api/auth/buyer/signin
//DESC : Signs in the buyer
router.post('/buyer/signin', gTokenVerifier, async (req, res) => {
  try {
    //get google account data from request body
    const { name, picture, email } = req.body.googleAccountData;

    //check if buyer with given email exists
    let buyer = await Buyer.findOne({ email: email });

    if (!buyer) {
      //if not exist
      console.log('Buyer does not exist, creating...');
      buyer = new Buyer({ name: name, email: email });
      await buyer.save();
      console.log('New Buyer created');
    } //if exist
    else {
      console.log('Buyer exists');
    }

    //create payload for JWT token
    const payload = { buyer_id: buyer._id };
    console.log('Pay load is : ');
    console.log(payload);
    //create token using secretKey and payload
    const token = jwt.sign(payload, config.secretKey, {
      expiresIn: '1000000s',
    });
    console.log('JWT generated');

    //send token to client
    res.json({ token, buyer });
  } catch (err) {
    console.log(err);
    res.json(505).json({ msg: 'Server Error' });
  }
});

//ROUTE : /api/auth/seller/me
//DESC : Get currently logged in seller
router.get("/seller/me", sellerExtract, (req, res) => {
  res.json({seller : req.body.seller})
})

//ROUTE : /api/auth/buyer/me
//DESC : Get currently logged in buyer
router.get("/buyer/me", buyerExtract, (req, res) => {
  res.json({buyer : req.body.buyer})
})

module.exports = router;
