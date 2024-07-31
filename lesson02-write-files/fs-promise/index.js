const fsPromises = require("fs").promises;
const path = require("path");

const fileOperation = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );

    console.log("🚀 ~ fileOperation ~ data", data);

    // Write File
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    // Write File
    await fsPromises.writeFile(
      path.join(__dirname, "files", "reply.txt"),
      data
    );

    // Append File
    await fsPromises.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nThis sentence is appended\n"
    );

    // Rename File
    await fsPromises.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "newReply.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "newReply.txt"),
      "utf8"
    );

    console.log("🚀 ~ fileOperation ~ newData", newData);
  } catch (error) {
    console.log("🚀 ~ fileOperation ~ error", error);
  }
};

// const writeOperation = async () => {
//     try {
//         await fsPromises.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you\n');
//     }
//     catch (error) {
//         console.log("🚀 ~ writeOperation ~ error", error);
//     }
// }

fileOperation();
// writeOperation();
