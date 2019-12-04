var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var CnnPool = require("./Routes/CnnPool.js");
var async = require("async");
var cors = require("cors");
var portNum;

var app = express();

// Static paths to be served like index.html and all client side js
app.use(express.static(path.join(__dirname, "public")));

if (process.argv[2] === "-p" && process.argv[3]) {
  portNum = parseInt(process.argv[3]);
} else {
  portNum = 8080;
}

app.use(function(req, res, next) {
  console.log("Handling " + req.path + "/" + req.method);
  res.header("Access-Control-Allow-Origin", "http://localhost:" + portNum);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    exposedHeaders: ["Location"], // All headers allowed to be shared, we only use 'Location'
    credentials: true,
    origin: true
  })
);

// No further processing needed for options calls.
app.options("/*", function(req, res) {
  res.status(200).end();
});

// Static path to index.html and all clientside js
// Parse all request bodies using JSON
app.use(bodyParser.json());

// Add DB connection, with smart chkQry method, to |req|
app.use(CnnPool.router);

// Load all subroutes
app.use("/Profiles", require("./Routes/Profiles.js"));

// Handler of last resort.
// Print a stacktrace to console and send a 500 response.
app.use(function(req, res) {
  res.status(404).end();
  res.cnn.release();
});

app.use(function(err, req, res, next) {
  res.status(500).json(err.stack);
  req.cnn && req.cnn.release();
});

app.listen(parseInt(portNum), function() {
  console.log("App Listening on port: " + portNum);
});
