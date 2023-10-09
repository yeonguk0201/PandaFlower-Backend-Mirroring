const orderDao = require('../models/order/orderDao');

async function getOrder(id) {
  const orders = await orderDao.getOrder(id);
  return orders;
}

async function createOrder(orderData) {
  const newOrder = await orderDao.createOrder(orderData);
  return newOrder;
}

module.exports = {
  getOrder,
  createOrder,
};
