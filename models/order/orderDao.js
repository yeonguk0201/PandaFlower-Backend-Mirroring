const Order = require('./order');

async function create(orderData) {
  const newOrder = await Order.create(orderData);

  if (!newOrder) {
    throw new Error('ORDER_FAILED');
  }

  return newOrder;
}

module.exports = {
  create,
};
