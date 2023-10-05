const passport = require('passport');
const userService = require('../services/userService');
const userDao = require('../models/user/userDao');
const createToken = require('../utils/createToken');

async function signUp(req, res, next) {
  const { name, email, password, passwordConfirm, phoneNumber, address } =
    req.body;

  try {
    if (
      !name ||
      !email ||
      !password ||
      !passwordConfirm ||
      !phoneNumber ||
      !address
    ) {
      throw new Error('KEY_ERROR');
    }

    const createUser = await userService.signUp(
      name,
      email,
      password,
      passwordConfirm,
      phoneNumber,
      address
    );

    res.status(201).json(createUser);
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    try {
      if (err) {
        throw new Error(err);
      }

      if (info) {
        throw new Error(info.message);
      }

      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          throw new Error(loginError);
        }

        const token = createToken(user);
        res.json({ accessToken: token });
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
}

async function getUserInfo(req, res, next) {
  try {
    const { id } = req.params;
    const user = await userDao.getUser(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {
  signUp,
  login,
  getUserInfo,
};
