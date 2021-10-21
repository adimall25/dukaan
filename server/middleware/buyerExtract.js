const jwt = require('jsonwebtoken'); //for jwt verifying and decoding
const config = require('../config/default'); //for secret key
const Buyer = require('../models/Buyer'); //for buyer model

async function buyerExtract(req, res, next) {
  try {
    //get jwt token from request header
    const token = req.get('x-auth-token');
    // console.log(req.headers);

    //verify and decode token using secret key
    const decoded = jwt.verify(token, config.secretKey);
    console.log(decoded.buyer_id);

    //get buyer_id
    const buyer_id = decoded.buyer_id;

    //find buyer from database using buyer_id
    const buyer = await Buyer.findOne({ _id: buyer_id });
    console.log(buyer);
    if (!buyer) {
      //if no buyer is found
      res.status(404).json({ msg: 'Buyer does not exist' });
    } //if buyer found
    else {
      console.log('Buyer extracted from JWT');

      //store buyer in body of request object
      req.body.buyer = buyer;
    }

    //call the next middleware
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: 'Error while decoding jwt' });
  }
}

module.exports = buyerExtract;
