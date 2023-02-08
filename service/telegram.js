const excuteShell = require("./excuteShell");

const sendMsgTelegramByShellScrip = (msg) => {
  excuteShell(`bash  ./app.sh "${msg}"`);
};
module.exports = sendMsgTelegramByShellScrip;
