const express = require('express');
const sellerExtract = require('../middleware/sellerExtract'); //for extracting buyer from header(JWT)
const SellerProfile = require('../models/SellerProfile'); //for BuyerProfile model
const Product = require('../models/Product'); //for BuyerProfile model
const buyerExtract = require("../middleware/buyerExtract");

const router = express.Router();

router.post('/add', sellerExtract, async (req, res) => {
  try {
    //extract product data from request body
    const { name, price, description, image} = req.body.productData;
    const seller = req.body.seller

    //check if product already exists
    let product = await Product.findOne({ name, seller });

    if (product) {
      //if already exists
      console.log('Product already exist for seller');
      res.status(409).json({ msg: 'Product already exist for seller ' });
    } else {
      //create new product object
      product = new Product({
        name,
        price,
        description,
        image,
        seller: seller.id,
      });

      await product.save();

      console.log('New product added');

      let sellerProfile = await SellerProfile.findOne({ seller: seller.id });
      if (!sellerProfile) {
        res.status(404).json({ msg: 'Seller Profile not found' });
      } else {
        sellerProfile.products.push(product.id);
        await sellerProfile.save();
        console.log('Product added to seller profile');
        res.json({product});
      }
    }
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

router.delete(
  '/product/:product_id',
  sellerExtract,
  async (req, res) => {
    try {
      const product_id = req.params.product_id;
      await Product.findOneAndDelete({ _id: product_id });
      console.log('Product deleted from database');

      const seller_id = req.body.seller._id;
      console.log(seller_id);
      const sellerProfile = await SellerProfile.findOne({ id: seller_id });
      console.log(sellerProfile);
      sellerProfile.products.filter((el) => el._id != product_id);
      await sellerProfile.save();
      console.log('Product deleted from seller profile');
      res.json({sellerProfile});
    } catch (err) {
      console.log(err);
      res.status(505).json({ msg: 'Server Error' });
    }
  }
);

router.get('/all', async (req, res) => {
  try {
    const allProducts = await Product.find({});
    console.log('All products fetched');
    res.json({allProducts});
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

router.get('/seller/:seller_id', async (req, res) => {
  try {
    let seller_id = req.params.seller_id;
    const sellerProducts = await Product.find({ seller: seller_id });
    console.log('All products fetched of that seller');
    res.json({sellerProducts});
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});
router.get('/me', sellerExtract, async (req, res) => {
  try {
    let seller = req.body.seller;
    const sellerProducts = await Product.find({ seller: seller.id });
    console.log('All products fetched of logged in  seller');
    res.json({sellerProducts});
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

//
router.get('/product/:product_id', async (req, res) => {
  try {
    let product_id = req.params.product_id;
    const product = await Product.findOne({ _id: product_id });
    console.log(product_id);
    console.log(product);
    console.log('Product Details Fetched');
    res.json({product});
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Server Error' });
  }
});

router.put('/product/:product_id', async (req, res) => {
  try
  {
    let product_id = req.params.product_id;

    const product = await Product.findOne({_id : product_id});
    
    const {name, price, description, image} = req.body.productData;

    name ? product.name = name : null;
    price ? product.price = price : null;
    description ? product.description = description : null;
    image ? product.image = image : null;

    await product.save();

    res.json({product});

  }
  catch(err)
  {
    console.log(err);
    res.status(505).json({msg : 'Server Error'})
  }
})

router.get("/sellers/all", buyerExtract, async (req, res) => {
  try
  {
    const sellerProfiles = await SellerProfile.find({}).populate('products');
    res.json({allSellersProducts : sellerProfiles})
  }
  catch(err)
  {
    console.log(err);
    res.status(505).json({msg : err});
  }
})
module.exports = router;
