const orderDao = require('../models/order/orderDao');

async function createOrder(orderData) {
  const newOrder = await orderDao.create(orderData);
  return newOrder;
}

module.exports = {
  createOrder,
};
