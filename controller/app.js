const router = require("express").Router();
const { spawn } = require("child_process");
const { log } = require("../config/logger");
const { logReqInterceptor } = require("../middleware/logInterceptor");
const stopApp = require("../service/stop");
const startApp = require("../service/start");

router.get("/run-script", logReqInterceptor(), (req, res) => {
  const pyprog = spawn("python", ["./test.py"]);

  pyprog.stdout.on("data", function (data) {
    const buf = Buffer.from(data, "hex");
    log.info(buf.toString("utf8"));
    res.status(200).json({ msg: `sucess` });
  });

  pyprog.stderr.on("data", (data) => {
    const buf = Buffer.from(data, "hex");
    log.info(buf.toString("utf8"));
    res.status(400).json({ msg: `fail` });
  });
});

router.get("/stop", logReqInterceptor(), (req, res) => {
  try {
    stopApp();
    return res.status(200).json({ msg: `sucess` });
  } catch (error) {
    return res.status(400).json({ msg: `fail` });
  }
});

router.get("/start", logReqInterceptor(), (req, res) => {
  try {
    startApp();
    return res.status(200).json({ msg: `sucess` });
  } catch (error) {
    return res.status(400).json({ msg: `fail` });
  }
});

module.exports = router;
