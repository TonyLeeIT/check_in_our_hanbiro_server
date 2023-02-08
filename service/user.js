const bcrypt = require("bcrypt");
const { UserModel } = require("../models");
const findUserByUid = async (userid) => {
  return await UserModel.findAll({
    where: {
      userid: userid,
    },
  });
};
const generatePassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
const isPasswordMatched = async (password, user) => {
  return await bcrypt.compare(password, user);
};
module.exports = { findUserByUid, generatePassword, isPasswordMatched };
