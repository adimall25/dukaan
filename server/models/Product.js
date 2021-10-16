const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
  },
  image: {
    type: String,
  },
});
const Product = new mongoose.model('Product', ProductSchema);
module.exports = Product;
