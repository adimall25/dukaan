const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    products : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Product'
            },

            productName : {
                type : String
            },

            productPrice : {
                type : Number
            },

            productQuantity : {
                type : Number
            }
        }
    ],

    seller : {
        shopName : String,
        shopAddress : String,
        seller : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Seller'
        }
    },

    buyer : {
        name : String,
        hostelNumber : String,
        buyer : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Buyer'
        }
    },

    status : {
        type: String,
        enum : ['PENDING','COMPLETED'],
        default: 'PENDING'
    },

    totalPrice : {
        type : Number
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;