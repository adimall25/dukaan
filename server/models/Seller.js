const mongoose = require("mongoose");   //for schemas and models

//create schema for seller
const sellerSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true
        },

        email : {
            type: String,
            required: true
        }
    }
)

//create model using the above schema
const Seller = mongoose.model('Seller', sellerSchema);

//export seller model
module.exports = Seller;