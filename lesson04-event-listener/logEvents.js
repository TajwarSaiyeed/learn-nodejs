const { format } = require("./node_modules/date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async (message) => {
  const dateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");

  const logMessage = `${dateTime}\t${uuid()}\t${message}`;

  // console.log("🚀 ~ logEvents ~ logMessage", logMessage);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "events.log"),
      logMessage + "\n"
    );

    console.log("Event logged successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
