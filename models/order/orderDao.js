const Order = require('./order');

async function getOrder(id) {
  const orders = await Order.find({ user: id });

  if (orders.length === 0) {
    throw new Error('ORDER_HISTORY_EMPTY');
  }
  return orders;
}

async function createOrder(orderData) {
  const newOrder = await Order.create(orderData);

  if (!newOrder) {
    throw new Error('ORDER_FAILED');
  }

  return newOrder;
}

module.exports = {
  getOrder,
  createOrder,
};
