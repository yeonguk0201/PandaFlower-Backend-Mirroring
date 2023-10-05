const User = require('./user');
const makeHash = require('../../utils/makeHash');

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

module.exports = { createUser };
