const { Router } = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/signup', validateUser, userController.signUp);

router.post('/login', userController.login);

router.get('/', validateToken, userController.getUserInfo);

router.patch('/', validateToken, userController.editUserInfo);

router.delete('/', validateToken, userController.deleteUser);

module.exports = router;
