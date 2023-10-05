const userDao = require('../models/user/userDao');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
const phoneNumberRegex = /^010\d{8}$/;

async function signUp(
  name,
  email,
  password,
  passwordConfirm,
  phoneNumber,
  address
) {
  if (!emailRegex.test(email)) {
    throw new Error('EMAIL_INVALID');
  }

  if (!passwordRegex.test(password)) {
    throw new Error('PASSWORD_INVALID');
  }

  if (!(password === passwordConfirm)) {
    throw new Error('PASSWORD_MISMATCH');
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    throw new Error('PHONE_NUMBER_INVALID');
  }

  const createUser = await userDao.createUser(
    name,
    email,
    password,
    phoneNumber,
    address
  );

  return createUser;
}

module.exports = { signUp };
