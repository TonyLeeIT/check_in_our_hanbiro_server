const router = require("express").Router();

const appRouter = require("./app");
const authRouter = require("./auth");
const scheduleRouter = require("./schedule");

router.use("/api/v1", appRouter);
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/schedule", scheduleRouter);

module.exports = router;
