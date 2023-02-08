const router = require("express").Router();
const { register, login } = require("../service/auth");
const { findUserByUid } = require("../service/user");
const { authMiddleware } = require("../middleware/auth");

router.post("/register", async (req, res) => {
  const users = await findUserByUid(req.body.userid);
  if (users.length > 0) {
    return res.status(401).json({ error: `UserId ${req.body.userid} existed` });
  }
  register(req.body.userid, req.body.password)
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

router.post("/login", async (req, res) => {
  const { userid, password } = req.body;
  try {
    const { user, token } = await login(userid, password);
    console.log(token);
    //res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
    res.status(201).json({ user, jwt: token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.get("/me", authMiddleware(true), (req, res) => {
  res.status(201).json(req.user);
});

module.exports = router;
