const express = require("express");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

// Custom middleware logger
app.use(logger);

// whitelist domains
const whitelist = ["http://localhost:3000", "http://localhost:5000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

// CORS
app.use(cors(corsOptions));

// Middleware
// Waterfall
/*
   build-in middleware to handle unlencoded data
   in other words, it will parse the data from the form and make it available in the req.body object
   'content-type': 'application/x-www-form-urlencoded'
*/
app.use(express.urlencoded({ extended: false }));

// build-in middleware to handle json data
app.use(express.json());

// serve static files
/*
  express.static() is a built-in middleware function in Express. It serves static files and is based on serve-static.
  
  example:
  app.use(express.static('public'))
  This will serve all files in the public directory.
*/
app.use(express.static(path.join(__dirname, "/public")));

// Route handlers
app.get("^/$|^/index(.html)?", (req, res) => {
  console.log("[GET] /index.html".bgCyan.black);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  console.log("[GET] /new-page.html".cyan);
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  console.log("[GET] /old-page.html".bgCyan.black);
  res.redirect(301, "/new-page.html"); // 302 by default
});

// Route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("[GET] /hello.html".bgGreen.black);
    next();
  },
  (req, res) => {
    console.log("Second handler".bgGreen.black);
    res.send("<h2>Second handler</h2>");
  }
);

// chaining route handlers
const one = (req, res, next) => {
  console.log("One".bgRed.black);
  next();
};

const two = (req, res, next) => {
  console.log("Two".bgCyan.black);
  next();
};

const three = (req, res, next) => {
  console.log("Three".bgGreen.black);
  res.send("Finished");
};

app.get("/chain(.html)?", [one, two, three]);

app.all("*", (req, res) => {
  console.log("[GET] 404 Not Found".bgRed.white);

  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "Not Found" });
  } else {
    res.type("txt").send("Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}`.bgGreen.black
  );
});
