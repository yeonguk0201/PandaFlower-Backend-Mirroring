const CartItem = require('../models/cartSchema');

const cartService = {
  deleteCartItem: async (userKey, itemKey) => {
    try {
      // 장바구니 항목 삭제 로직
      const result = await CartItem.deleteOne({ userKey, itemKey });
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = cartService;
