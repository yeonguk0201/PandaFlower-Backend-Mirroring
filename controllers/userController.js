const userService = require('../services/userService');

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

module.exports = {
  signUp,
};
