const { cartService } = require('../services/cartService'); 
const Cart = require('../models/cartSchema');


async function addItemToCart(req, res) {
  try {
    const { userKey, itemKey } = req.body;
    const result = await cartService.addItemToCart(userKey, itemKey);
    res.status(200).json({ message: 'Add success', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Controller Error' });
  }
}



async function getCart(req, res) {
  try {
    const { userKey } = req.body; 
    const userCart = await cartService.getCartByUser(userKey);
    res.status(200).json(userCart);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Controller Error' });
  }
}





async function deleteCartItem(req, res) {
  try {
    const { userKey, itemKey } = req.body;
    const result = await cartService.deleteCartItem(userKey, itemKey);
    res.status(200).json({ message: 'Delete success', result });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Controller Error' });
  }
}

module.exports = { deleteCartItem, addItemToCart, getCart };

