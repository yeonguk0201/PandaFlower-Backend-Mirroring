
const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    
    itemKey:{
     type: String, 
    required: true,},
    itemCNT:{
      type:Number,
      required:true,
    },
  }
);

const Cart = mongoose.model('Cart', CartSchema);
//mongoose가 모델 이름을 소문자로 변환하고 복수형으로 만들어 MongoDB컬렉션 이름으로 사용 
module.exports = Cart; //Cart로 위에 적힌 스키마를 이용할 수 있다

