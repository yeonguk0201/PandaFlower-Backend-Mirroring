const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  userKey: {
    type: mongoose.Schema.Types.ObjectId,
    //type: String,
    ref: 'User',
  },
  itemKey: {
    type: String,
    required: true,
  },
  itemCNT: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
