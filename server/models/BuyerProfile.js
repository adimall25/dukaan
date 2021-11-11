const mongoose = require('mongoose');   //for schemas and models

//create schema
const buyerProfileSchema = mongoose.Schema({
    buyer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Buyer"
    },
    name : {
        type : String,
        required: true
    },

    rollNumber : {
        type : String,
        required: true
    },

    hostelNumber : {
        type : String,
        required : true
    },

    flatNumber : {
        type : String,
        required : true
    },

    contactNumber : {
        type : String,
        required : true
    },

    cart : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product"
            },

            quantity : Number
            
        }
    ],

    orders : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Order"
        }
    ]
})

//create model using above schema
const BuyerProfile = mongoose.model('BuyerProfile', buyerProfileSchema);

//export module
module.exports = BuyerProfile;