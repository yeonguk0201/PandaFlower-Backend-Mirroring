const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.get('/:id', validateToken, userController.getUserInfo);

router.patch('/:id', validateToken, userController.editUserInfo);

router.delete('/:id', validateToken, userController.deleteUser);

module.exports = router;
