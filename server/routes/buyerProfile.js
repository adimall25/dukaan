const express = require('express');
const buyerExtract = require('../middleware/buyerExtract'); //for extracting buyer from header(JWT)
const BuyerProfile = require('../models/BuyerProfile'); //for BuyerProfile model

const router = express.Router();

router.post('/create', buyerExtract, async (req, res) => {
  try {
    //get buyer and buyer_id
    const buyer = req.body.buyer;
    const buyer_id = buyer.id;
    console.log('Req body is : ');
    console.log(req.body);

    //check if profile already exists
    const temp = await BuyerProfile.findOne({ buyer: buyer_id });

    if (temp) {
      //if exists, send error
      console.log('Buyer profile already exists');
      res.status(409).json({ msg: 'Buyer profile already exists' });
    } else {
      //extract form data from req.body
      const { name, rollNumber, hostelNumber, flatNumber, contactNumber } =
        req.body.buyerProfileData;

      //create new buyerProfile document
      const buyerProfile = new BuyerProfile({
        buyer: buyer_id,
        name,
        rollNumber,
        hostelNumber,
        flatNumber,
        contactNumber,
      });

      //save in database
      await buyerProfile.save();

      console.log('Buyer Profile Created');
      res.json({ buyerProfile });
    }
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

module.exports = router;
