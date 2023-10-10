const adminService = require('../services/adminService');

async function getAllOrder(req, res) {
  try {
    const allOrders = await adminService.getAllOrder();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function editDeliveryStatus(req, res) {
  const { orderNumber, deliveryStatus } = req.body;
  try {
    const updatedOrder = await adminService.editDeliveryStatus(
      orderNumber,
      deliveryStatus
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteOrderbyAdmin(req, res) {
  const { orderNumber } = req.body;
  const allOrders = await adminService.deleteOrderbyAdmin(orderNumber);
  return allOrders;
}

module.exports = {
  getAllOrder,
  editDeliveryStatus,
  deleteOrderbyAdmin,
};
