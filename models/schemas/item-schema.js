const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

const itemSchema = new Schema({
  //상품 구분할 id
  item_id: {
    type: String,
    default: shortId.default,
    required: true,
    index: true,
  },
  //이름
  name: {
    type: String,
    required: true,
  },
  //상품의 카테고리
  category: {
    type: String,
    required: true,
  },
  //상품의 가격
  price: {
    type: Number,
    required: true,
  },
  //상품 설명
  description: {
    type: String,
    required: true,
  },
  //상품 이미지
  image: {
    url: String,
  },
});

module.exports = itemSchema;
