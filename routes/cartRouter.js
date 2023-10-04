const { Router } = require('express');
const router = Router();

const cartController = require('../controllers/cartController');

router.get('/', async (req, res) => {
  console.log('장바구니 조회 라우터');
  // 라우터 로직
  cartController.addItemToCart(req, res); // cartController 함수 호출
});

  module.exports = router;

  