const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async (message, logName) => {
  const dateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");

  const logMessage = `${dateTime}\t${uuid()}\t${message}`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logMessage + "\n"
    );
  } catch (error) {
    console.error(error);
  }
};

const logger = (req, res, next) => {
  logEvents(`[${req.method}]\t${req.headers.origin}\t${req.url}`, "server.log");
  next();
};

module.exports = {
  logger,
  logEvents,
};
