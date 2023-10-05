const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');
const router = Router();

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.get('/auth', validateToken);

module.exports = router;
