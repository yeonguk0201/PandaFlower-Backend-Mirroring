const { Router } = require('express');
const orderController = require('../controllers/orderController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', validateToken, orderController.createOrder);

module.exports = router;
