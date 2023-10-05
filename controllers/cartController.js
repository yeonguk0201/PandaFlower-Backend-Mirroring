const cartService = require('../services/cartService');

async function addItemToCart(req, res, next) {
  try {
    const { userKey, itemKey  } = req.body;
    const result = await cartService.addItemToCart(userKey, itemKey);
    res.status(200).json({ message: 'Add success', result });
  } catch (error) {
    next(error);
  }
}


async function deleteCartItem(req, res, next) {
  try {
    const { userKey, itemKey } = req.body;
    const result = await cartService.deleteCartItem(userKey, itemKey);
    res.status(200).json({ message: 'Delete success', result });
  } catch (error) {
    next(error);
  }
}

module.exports = { deleteCartItem, addItemToCart };

