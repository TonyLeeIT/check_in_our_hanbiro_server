const bunyan = require("bunyan");
const PrettyStream = require("bunyan-pretty-colors");

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const log = bunyan.createLogger({
  name: "Main Application",
  streams: [
    {
      level: "info",
      level: "debug",
      level: "trace",
      type: "raw",
      stream: prettyStdOut,
    },
  ],
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
  },
});

module.exports = { log };
