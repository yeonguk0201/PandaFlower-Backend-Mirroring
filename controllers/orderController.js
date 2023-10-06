const Order = require('../models/order/order');

async function createOrder(req, res) {
  const { _id } = req.user;
  //req.body로 상품을 어떻게 받을지 아직 정하지 않음
  try {
    const order = await Order.create({ user: _id, orderStatus: '주문완료' });

    if (!order) {
      throw new Error('ORDER_FAILED');
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createOrder,
};
