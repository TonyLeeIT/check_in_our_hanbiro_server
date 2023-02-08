const excuteShell = require("./excuteShell");
const sendMsgTelegramByShellScrip = require("./telegram");
const { log } = require("../config/logger");

const restartApp = () => {
  try {
    log.info("Prepare to Restart application");
    excuteShell(`bash  ./restart.sh`);
    log.info("Restart app succeed");
  } catch (error) {
    log.info("Restart app fail :", error);
    sendMsgTelegramByShellScrip(`Restart app fail`);
  }
};

module.exports = restartApp;
