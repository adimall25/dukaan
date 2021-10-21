const jwt = require('jsonwebtoken'); //for jwt verifying and decoding
const config = require('../config/default'); //for secret key(JWT)
const Seller = require('../models/Seller'); //for Seller model

async function sellerExtract(req, res, next) {
  try {
    //get jwt token from request header
    const token = req.get('x-auth-token');

    //verify and decode token using secret key
    const decoded = jwt.verify(token, config.secretKey);

    //get seller_id
    const seller_id = decoded.seller_id;

    //find seller from database using seller_id
    const seller = await Seller.findOne({ _id: seller_id });

    if (!seller) {
      //if no seller is found
      res.status(404).json({ msg: 'Seller does not exist' });
    } //if seller found
    else {
      req.body.seller = seller;
    }

    //call next middleware
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Error while decoding jwt' });
  }
}

module.exports = sellerExtract;
