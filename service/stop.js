const excuteShell = require("./excuteShell");
const sendMsgTelegramByShellScrip = require("./telegram");
const { log } = require("../config/logger");

const stopApp = () => {
  try {
    log.info("Prepare to stop application");
    excuteShell(`bash  ./stop.sh`);
    log.info("Stop app succeed");
  } catch (error) {
    log.info("Stop app fail :", error);
    sendMsgTelegramByShellScrip(`Stop app fail`);
  }
};

module.exports = stopApp;
