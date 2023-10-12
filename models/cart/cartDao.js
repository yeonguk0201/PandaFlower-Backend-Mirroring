const Cart = require('./cart');

async function getCartByUser(id) {
  let cartItems = await Cart.find({ user: id }).populate('item');
  cartItems = cartItems.map((item) => item.item);

  if (cartItems.length === 0) {
    throw new Error('CART_EMPTY');
  }

  return cartItems;
}

async function addItemToCart(addData) {
  const added = await Cart.create(addData);

  if (!added) {
    throw new Error('NOT_ADDED');
  }

  return added;
}

async function deleteCartItem(id, items) {
  if (!items) {
    const deleted = await Cart.deleteMany({ user: id });
    return deleted;
  }

  const deleteOperations = items.map((item) => ({
    deleteOne: {
      filter: { item, user: id },
    },
  }));

  const deleted = await Cart.bulkWrite(deleteOperations);

  return deleted;
}

module.exports = { getCartByUser, addItemToCart, deleteCartItem };
