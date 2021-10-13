//API route : /api/profile/seller

const express = require('express');
const SellerProfile = require('../models/SellerProfile');       //for SellerProfile model
const sellerExtract = require('../middleware/sellerExtract');   //for extracting seller from header(JWT)

const router = express.Router();


// route : POST /api/profile/seller/create 
//  creates seller profile
router.post("/create", sellerExtract, async (req, res) => {
    try
    {
        //get seller and seller_id
        const seller = req.body.seller;
        const seller_id = seller.id;

        //check if profile already exists
        const temp = await SellerProfile.findOne({seller : seller_id});

        if(temp)    //if exists, send error
        {
            console.log("Seller profile already exists");
            res.status(409).json({msg : "Seller profile already exists"});    
        }
        else
        {
            //extract form data from req.body
            const {name, shopName, shopAddress, contactNumber} = req.body;

            //create new sellerProfile document
            const sellerProfile = new SellerProfile({
                seller : seller.id, 
                name, 
                shopName, 
                shopAddress, 
                contactNumber
            });

            //save in database
            await sellerProfile.save();
            
            console.log("Seller Profile Created");
            res.status(200).json(sellerProfile);
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"});
    }
})


module.exports = router;