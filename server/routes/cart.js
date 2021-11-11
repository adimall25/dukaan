//API ROUTE : /api/auth

const express = require('express');
const config = require('../config/default'); //for JWT secretKey
const Seller = require('../models/Seller'); //for Seller model
const BuyerProfile = require('../models/BuyerProfile'); //for Buyer model
const sellerExtract = require('../middleware/sellerExtract')
const buyerExtract = require('../middleware/buyerExtract')

const router = express.Router();

router.get("/me", buyerExtract, async (req, res) => {
    try
    {
        const buyer_id = req.body.buyer._id;

        const buyerProfile = await BuyerProfile.findOne({_id : buyer_id}).populate('cart.product');

        res.json({cart : buyerProfile.cart});

    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"})
    }
})

router.post("/:product_id", buyerExtract, async (req, res) => {
    try
    {
        const buyer_id = req.body.buyer._id;

        const buyerProfile = await BuyerProfile.findOne({id : buyer_id});

        const product_id = req.params.product_id, cart = buyerProfile.cart;

        const index = cart.findIndex(el => el.product === product_id)

        if(index !== -1)
        {
            cart[index].quantity++;
        }
        else
        {
            cart.push(product_id);
        }

        buyerProfile.cart = cart;

        await buyerProfile.save();

        await buyerProfile.populate('cart.product');

        res.json({cart : buyerProfile.cart})
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"})
    }
})

router.delete("/:product_id", buyerExtract, async (req, res) => {
    try
    {
        const buyer_id = req.body.buyer._id;

        const buyerProfile = await BuyerProfile.findOne({_id : buyer_id});

        let product_id = req.params.product_id, cart = buyerProfile.cart;

        const index = cart.findIndex(el => el.product === product_id)

        cart[index].quantity--;

        if(cart[index].quantity <= 0)
        {
            cart = cart.filter(el => el.product !== product_id);
        }

        buyerProfile.cart = cart;

        await buyerProfile.save();

        await buyerProfile.populate('cart.product');

        res.json({cart : buyerProfile.cart})
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"})
    }
})

router.delete("/empty", buyerExtract, async (req, res) => {
    try
    {
        const buyer_id = req.body.buyer._id;

        const buyerProfile = await BuyerProfile.findOne({_id : buyer_id});

        buyerProfile.cart = [];

        await buyerProfile.save();

        res.json({cart : []})
    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"})
    }
})

module.exports = router;