const Order = require('../models/order/order');
const orderService = require('../services/orderService');

async function createOrder(req, res) {
  const { _id } = req.user;
  const { recipient, contact, shippingAddress, totalPrice, items } = req.body;
  const orderData = {
    user: _id,
    orderStatus: '주문완료',
    recipient,
    contact,
    shippingAddress,
    totalPrice,
    items,
  };
  try {
    const newOrder = await orderService.createOrder(orderData);

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createOrder,
};
