const adminService = require('../services/adminService');

async function getAllOrder(req, res) {
  try {
    const allOrders = await adminService.getAllOrder();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function editOrderbyAdmin() {
  const allOrders = await orderDao.getAllOrder();
  return allOrders;
}

async function deleteOrderbyAdmin() {
  const allOrders = await orderDao.getAllOrder();
  return allOrders;
}

module.exports = {
  getAllOrder,
  editOrderbyAdmin,
  deleteOrderbyAdmin,
};
