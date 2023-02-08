const excuteShell = require("./excuteShell");
const sendMsgTelegramByShellScrip = require("./telegram");
const { log } = require("../config/logger");

const startApp = () => {
  try {
    log.info("Prepare to start application");
    excuteShell(`bash  ./start.sh`);
    sendMsgTelegramByShellScrip(`Start app succeed`);
    log.info("Start app succeed");
  } catch (error) {
    log.info("Start app fail ", error);
    sendMsgTelegramByShellScrip(`Start app fail`);
  }
};

module.exports = startApp;
