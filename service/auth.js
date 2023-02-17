const jwt = require("jsonwebtoken");
const {
  generatePassword,
  isPasswordMatched,
  findUserByUid,
} = require("./user");
const { UserModel } = require("../models");
const { User } = require("../contants/user");
require("dotenv").config();

const SECRET_KEY = process.env.MY_SECRET_KEY;

const generateToken = (uid) => {
  return jwt.sign({ uid }, SECRET_KEY, {
    expiresIn: 1 * 24 * 60 * 60 * 1000,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

const register = async (userid, password) => {
  let displayName = "";
  try {
    displayName = User.find((user) => user.id === userid).name;
    if (!displayName) throw new Error(`Userid ${userid} in blacklist`);
  } catch (error) {
    throw new Error(error.message);
  }
  const data = {
    userid,
    password: await generatePassword(password),
    displayName,
    photoUrl: "",
  };
  //saving the user
  return await UserModel.create(data);
};

const login = async (userid, password) => {
  const users = await findUserByUid(userid);
  if (users.length > 0) {
    const user = users[0];
    if (!(await isPasswordMatched(password, user.password))) {
      throw new Error("Password not matched");
    }
    return {
      user,
      token: generateToken(userid),
    };
  }
  throw new Error("User not found");
};

module.exports = { register, login, generateToken, verifyToken };
