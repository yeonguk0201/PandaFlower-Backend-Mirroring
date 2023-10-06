const CartItem = require('../models/cartSchema'); //데이터베이스모델 호출
const cartService = {

  addItemToCart: async (userKey, itemKey) => {
    try {
      const cartItem = CartItem.create({ userKey, itemKey });
      return cartItem;
    } catch (error) {
      throw error;
    }
  },


  getCartByUser : async (userKey) => {
    try {
      console.log("service까지 왔어요");
      const result = await CartItem.find({ userKey });
      console.log("model 다녀왔어요");
      return result;
    } catch (error) {
      throw error;
    }
  },


  deleteCartItem : async (userKey, itemKey) => {
    try {
      const result = await CartItem.deleteOne({ userKey, itemKey });
      return result;
    } catch (error) {
      throw error;
    }
  }
};



module.exports =  { cartService };
