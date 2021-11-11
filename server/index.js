const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//create express app
const app = express();

//use middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect to Database
connectDB();

//APIs related to authentication will go to this module
app.use('/api/auth', require('./routes/auth.js'));

//APIs related to seller profile
app.use('/api/profile/seller', require('./routes/sellerProfile'));

//APIs related to buyer profile
app.use('/api/profile/buyer', require('./routes/buyerProfile'));

//APIs related to Products
app.use('/api/products', require('./routes/products'));

//APIs related to Orders
app.use('/api/orders', require('./routes/orders'));

app.use('/api/cart', require('./routes/cart'));
//start listening
app.listen(5000, () => {
  console.log('Server started listening on port 5000');
});

// const add = prevTheme => !prevTheme;
// state, setState.... setState()
// axios.po
