const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.get('/:id', userController.getUserInfo);

router.get('/auth', validateToken);

module.exports = router;
