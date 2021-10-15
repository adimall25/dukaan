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


//route : GET /api/profile/seller/all
// gets the list profiles of all sellers
router.get("/all", async  (req, res) => {
    try
    {
        //find all seller profiles
        const sellerProfileList = await SellerProfile.find({});

        console.log("Fetched all the profiles");

        //send list to client
        res.json(sellerProfileList);
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"});
    }
})


//route : GET /api/profile/seller/:seller_id
// gets seller profile according to seller_id
router.get("/seller_id/:seller_id", async (req, res) => {
    try
    {
        //get seller_id
        const seller_id = req.params.seller_id;

        //find seller
        const sellerProfile = await SellerProfile.findOne({seller : seller_id});

        if(!sellerProfile)  //if no such seller exists
        {
            console.log("No seller profile found for given seller");
            res.status(404).json({msg : "No seller profile found for given seller"});
        }
        else
        {
            console.log("Seller Profile found")
            res.json(sellerProfile);
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"});
    }
})

module.exports = router;