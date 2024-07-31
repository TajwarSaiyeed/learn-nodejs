const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "lorem.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(__dirname, "lorem-copy.txt"));

// rs.on("data", (dataChank) => {
//   ws.write(dataChank);
// });

rs.pipe(ws);
