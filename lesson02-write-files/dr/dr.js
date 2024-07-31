/**
 * The fs module provides an API for interacting with the file system in a Node.js environment.
 * It allows you to perform various file-related operations such as reading, writing, and manipulating files and directories.
 *
 * @see {@link https://nodejs.org/api/fs.html|fs module documentation} for more information.
 */
const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("🚀 ~ Directory created!");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("🚀 ~ Directory removed!");
  });
}
