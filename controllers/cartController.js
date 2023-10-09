const cartService = require('../services/cartService');

async function getCartByUser(req, res) {
  const { _id } = req.user;
  try {
    const cartItems = await cartService.getCartByUser(_id);
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function addItemToCart(req, res) {
  const { _id } = req.user;
  const { item, quantity } = req.body;
  const addData = {
    user: _id,
    item,
    quantity,
  };
  try {
    const added = await cartService.addItemToCart(addData);
    res.status(201).json(added);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteCartItem(req, res) {
  const { _id } = req.user;
  const { items } = req.body;
  try {
    const deleted = await cartService.deleteCartItem(_id, items);
    res.status(200).json({ message: 'DELETE_SUCCESS' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getCartByUser,
  addItemToCart,
  deleteCartItem,
};
