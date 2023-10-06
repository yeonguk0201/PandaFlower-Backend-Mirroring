const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');
const uuid = require('uuid');

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      default: () => {
        return uuid.v4();
      },
      index: true,
      unique: true,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ['주문완료', '상품준비중', '배송시작', '배송완료'],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // User 모델과 연결
      required: true,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart', // Cart 모델과 연결
    },
    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Order = model('Order', orderSchema);

module.exports = Order;
