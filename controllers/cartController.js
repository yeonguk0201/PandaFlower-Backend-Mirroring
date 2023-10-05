const cartService = require('../services/cartService');

async function deleteCartItem(req, res, next) {
  try {
    const { userKey, itemKey } = req.body;
    const result = await cartService.deleteCartItem(userKey, itemKey);
    res.status(200).json({ message: 'delete success', result });
  } catch (error) {
    next(error);
  }
}

module.exports = { deleteCartItem };

