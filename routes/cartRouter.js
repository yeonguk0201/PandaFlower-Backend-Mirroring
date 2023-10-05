const { Router } = require('express');
const router = Router();

const cartController = require('../controllers/cartController');

router.get('/', async (req, res) => {
  console.log('장바구니 추가 라우터');
  cartController.addItemToCart(req, res); 
});

router.delete('/', async (req, res) => {
  console.log('장바구니 삭제 라우터');
  cartController.deleteCartItem(req, res); 
});

  module.exports = router;

  