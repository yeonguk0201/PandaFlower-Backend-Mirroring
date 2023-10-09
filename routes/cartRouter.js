const { Router } = require('express');
const cartController = require('../controllers/cartController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', validateToken, cartController.addItemToCart);

router.get('/', async (req, res) => {
  console.log('장바구니 조회 라우터');
  cartController.getCart(req, res);
});

router.put('/', async (req, res) => {
  console.log('장바구니 수정 라우터');
  cartController.updateCartItem(req, res);
});

router.delete('/', async (req, res) => {
  console.log('장바구니 삭제 라우터');
  cartController.deleteCartItem(req, res);
});

module.exports = router;
