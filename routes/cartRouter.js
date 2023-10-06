const { Router } = require('express');
const router = Router();

const cartController = require('../controllers/cartController');
//const cartSchema = require('../models/cartSchema');

router.post('/', async (req, res) => {
  console.log('장바구니 추가 라우터');
  cartController.addItemToCart(req, res); 
});


router.get('/', async (req, res) => {
  console.log('장바구니 조회 라우터');
  cartController.getCart(req, res); 
});

router.delete('/', async (req, res) => {
  console.log('장바구니 삭제 라우터');
  cartController.deleteCartItem(req, res); 
});



  module.exports = router;

  