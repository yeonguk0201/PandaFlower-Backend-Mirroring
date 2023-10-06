const User = require('../models/user/user');
const Order = require('../models/order/order');

async function createOrder(req, res) {
  console.log('주문 생성 시작');
  const { id } = req.params;
  console.log(id);
  const user = await User.findOne({ userId: id });
  console.log(user);
  const order = await Order.create({ user: user._id });
  res.json(order);
}

module.exports = {
  createOrder,
};
