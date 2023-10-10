const { Router } = require('express');
const cartController = require('../controllers/cartController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.get('/', validateToken, cartController.getCartByUser);

router.post('/', validateToken, cartController.addItemToCart);

router.delete('/', validateToken, cartController.deleteCartItem);

module.exports = router;
