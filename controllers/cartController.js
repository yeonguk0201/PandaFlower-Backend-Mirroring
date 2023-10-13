const cartService = require('../services/cartService');
const cartDao = require('../models/cart/cartDao');
const Cart = require('../models/cart/cart');

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
  console.log(req.body);
  const { item, quantity } = req.body;
  console.log(item, quantity);

  const addData = {
    user: _id,
    item,
    quantity,
  };

  try {
    const cartItems = await cartDao.getCartByUser(_id);
    const checkCart = cartItems.some((item) => item._id === _id);

    if (checkCart) {
      const filter = { user: _id, item };
      const update = { $inc: { quantity: 1 } };
      await Cart.findOneAndUpdate(filter, update);
      return;
    }

    const addData = {
      user: _id,
      item,
      quantity,
    };

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
