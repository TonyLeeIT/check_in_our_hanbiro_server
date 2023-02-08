const { verifyToken } = require("../service/auth");
const { findUserByUid } = require("../service/user");

const authMiddleware = (required) => {
  return async (req, res, next) => {
    if (!req.headers.authorization) {
      required ? res.status(401).send("Token not found") : next();
    }
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedObj = verifyToken(token);
      const userid = decodedObj.uid;
      findUserByUid(userid).then((users) => {
        if (users.length > 0) {
          const user = users[0];
          req.user = user;
          next();
        } else {
          res.status(404).send("User not found");
        }
      });
    } catch {
      if (required) {
        res.status(401).send("Invalid token");
      } else {
        next();
      }
    }
  };
};
module.exports = { authMiddleware };
