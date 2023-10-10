const orderDao = require('../models/order/orderDao');

async function getAllOrder() {
  const allOrders = await orderDao.getAllOrder();
  return allOrders;
}

async function editOrderbyAdmin() {
  const allOrders = await orderDao.getAllOrder();
  return allOrders;
}

module.exports = {
  getAllOrder,
};
