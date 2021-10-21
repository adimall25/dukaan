const mongoose = require('mongoose');   //for schemas and models

//create schema
const sellerProfileSchema = new mongoose.Schema(
    {
        seller : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Seller"
        },
        name : {
            type : String,
            required : true
        },
        shopName : {
            type : String, 
            required : true
        },
        shopAddress : {
            type : String,
            required : true
        },
        contactNumber : {
            type : String,
            required : true
        },

        orders : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Order'
            }
        ],
        products : {
            type : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "Product"
                }
            ]
        },
        shopImage : {
            type : String
        }
    }
)

//create model using above schema
const SellerProfile = mongoose.model('SellerProfile', sellerProfileSchema);

//export module
module.exports = SellerProfile;