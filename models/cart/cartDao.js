const Cart = require('./cart');

async function addItemToCart(addData) {
  const added = await Cart.create(addData);

  if (!added) {
    throw new Error('NOT_ADDED');
  }

  return added;
}

module.exports = { addItemToCart };
