const User = require('./user');
const makeHash = require('../../utils/makeHash');

async function getUser(id) {
  const user = await User.findOne({ userId: id });

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  return user;
}

async function createUser(name, email, password, phoneNumber, address) {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error('REGISTERED_USER');
  }

  const hashedPassword = await makeHash(password);

  const createUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    address,
  });

  return createUser;
}

module.exports = { getUser, createUser };
