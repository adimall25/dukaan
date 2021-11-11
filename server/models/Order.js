const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    products : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    seller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Seller'
    },

    buyer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Buyer'
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