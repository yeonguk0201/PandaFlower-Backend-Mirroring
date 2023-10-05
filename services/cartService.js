const CartItem = require('../models/cartSchema');


const cartService = {
  addItemToCart: async (userKey, itemKey) => {
    try {
      const cartItem = new CartItem({ userKey, itemKey });
      const result = await cartItem.save();
      return result;
    } catch (error) {
      throw error;
    }
  },

  deleteCartItem: async (userKey, itemKey) => {
    try {
      const result = await CartItem.deleteOne({ userKey, itemKey });
      return result;
    } catch (error) {
      throw error;
    }
  },
};



module.exports = cartService;
