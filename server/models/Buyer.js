const mongoose = require('mongoose');   //for schemas and models

//create schema for buyer
const buyerSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required: true
        },
        email : {
            type : String,
            required: true
        }
    }
)

//create model using above schema
const Buyer = mongoose.model('Buyer', buyerSchema);

//export the Buyer model
module.exports = Buyer;