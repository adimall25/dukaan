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
// route : GET /api/profile/buyer/me
//  Shows  LoggedIn buyer profile
router.get('/me', buyerExtract, async (req, res) => {
  try {
    //get buyer from Middleware(buyerExtract)
    let buyer = req.body.buyer;

    //check if buyer  exists
    if (!buyer) {
      res.status(404).json({ msg: 'Cannot Find the Buyer' });
    } else {
      //finding buyerProfile for that user
      let buyerProfile = await BuyerProfile.findOne({ buyer: buyer._id });

      //check if buyerProfile  exists
      if (!buyerProfile) {
        res.status(200).json({ msg: 'You need to create your profile' });
      } else {
        res.json({ buyerProfile });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

//route : GET /api/profile/buyer/all
// gets the list profiles of all buyers
router.get('/all', async (req, res) => {
  try {
    //find all buyer profiles
    const buyerProfileList = await BuyerProfile.find({});

    console.log('Fetched all the profiles');

    //send list to client
    res.json({ buyerProfileList });
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

//route : GET /api/profile/buyer/:buyer_id
// gets buyer profile according to buyer_id
router.get('/buyer_id/:buyer_id', async (req, res) => {
  try {
    //get buyer_id
    const buyer_id = req.params.buyer_id;

    //find buyer
    const buyerProfile = await BuyerProfile.findOne({ buyer: buyer_id });

    if (!buyerProfile) {
      //if no such buyer exists
      console.log('No buyer profile found for given buyer');
      res.status(404).json({ msg: 'No buyer profile found for given buyer' });
    } else {
      console.log('buyer Profile found');
      res.json({ buyerProfile });
    }
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

module.exports = router;
