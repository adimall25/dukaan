"use strict";

var express = require('express');

var sellerExtract = require('../middleware/sellerExtract');

var Order = require('../models/Order');

var router = express.Router();
router.get('/seller/me', sellerExtract, function _callee(req, res) {
  var orders;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Order.find({
            'seller.seller': req.body.seller._id
          }));

        case 3:
          orders = _context.sent;
          res.json({
            orders: orders
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/create', function _callee2(req, res) {
  var order, _order, products, seller, buyer, status, totalPrice;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          order = req.body.order;
          _order = order, products = _order.products, seller = _order.seller, buyer = _order.buyer, status = _order.status, totalPrice = _order.totalPrice;
          order = new Order({
            products: products,
            seller: seller,
            buyer: buyer,
            status: status,
            totalPrice: totalPrice
          });
          _context2.next = 6;
          return regeneratorRuntime.awrap(order.save());

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;