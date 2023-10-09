const { Router } = require('express');
const cartController = require('../controllers/cartController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.get('/', validateToken, cartController.getCartByUser);

router.post('/', validateToken, cartController.addItemToCart);

router.delete('/', validateToken, cartController.deleteCartItem);

// router.put('/', async (req, res) => {
//   console.log('장바구니 수정 라우터');
//   cartController.updateCartItem(req, res);
// });

// router.delete('/', async (req, res) => {
//   console.log('장바구니 삭제 라우터');
//   cartController.deleteCartItem(req, res);
// });

module.exports = router;
