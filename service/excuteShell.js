const { exec } = require("child_process");
const {log} = require('../config/logger')

const excuteShell = (shell) => {
  exec(shell, (error, stdout, stderr) => {
    if (error) {
      log.info(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      //log.info(`stderr: ${stderr}`);
      return;
    }
    //log.info(`stdout: ${stdout}`);
  });
};
module.exports = excuteShell;
