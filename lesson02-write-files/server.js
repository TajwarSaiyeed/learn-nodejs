const fs = require("fs");
const path = require("path");

// [Read File]
// fs.readFile("./files/starter.txt", 'utf8', (err, data) => {
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    // if we use utf8, we don't need to convert the buffer to a string
    console.log("🚀 [1] ~ fs.readFile ~ data:", data);

    // Convert the buffer to a string
    console.log("🚀 [2] ~ fs.readFile ~ data.toString():", data.toString());
  }
);

console.log("🚀 [3] ~ This is the last line of the script:");

// [Write File]
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you\n",
  (err) => {
    if (err) throw err;
    console.log("🚀 [4] ~ File has been written");

    // [Append File]
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "This sentence is appended\n",
      (err) => {
        if (err) throw err;
        console.log("🚀 [5] ~ Append file.");

        // [Rename File]
        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("🚀 [6] ~ Rename complete");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: ", err);
  process.exit(1);
});
