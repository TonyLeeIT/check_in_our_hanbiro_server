const { log } = require("../config/logger");
const colors = require("colors");

const logReqInterceptor = () => {
  return (req, res, next) => {
    log.trace(
      colors.blue(
        "=========================== LOG REQUEST ===========================\n",
        {
          protocol: req.protocol,
          method: req.method,
          url: req.url,
          params: req.params,
          headers: req.headers,
          body: req.body,
        }
      )
    );
    next();
  };
};

module.exports = { logReqInterceptor };
