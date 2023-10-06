const bcrypt = require('bcrypt');
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

async function editUser(id, data) {
  const { password, passwordConfirm, address } = data;

  if (password) {
    const user = await User.findOne({ userId: id });
    const compareResult = await bcrypt.compare(password, user.password);
    if (compareResult) {
      throw new Error('CURRENT_USE_PASSWORD');
    } else {
      if (password !== passwordConfirm) {
        throw new Error('INCORRECT_PASSWORD');
      } else {
        const hashedPassword = await makeHash(password);

        const updateData = address
          ? { password: hashedPassword, address }
          : { password: hashedPassword };

        const updatedUser = await User.findOneAndUpdate(
          { userId: id },
          { $set: updateData },
          { new: true }
        );

        if (!updatedUser) {
          throw new Error('UPDATE_FAILED');
        }

        return updatedUser;
      }
    }
  } else {
    const updatedUser = await User.findOneAndUpdate(
      { userId: id },
      { $set: data },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error('UPDATE_FAILED');
    }

    return updatedUser;
  }
}

async function deleteUser(id) {
  const result = await User.deleteOne({ userId: id });

  if (result.deletedCount === 0) {
    throw new Error('DELETE_FAILED');
  }

  return result.deletedCount;
}

module.exports = { getUser, createUser, editUser, deleteUser };
