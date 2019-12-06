var Express = require("express");
var async = require("async");
var mysql = require("mysql");
var CnnPool = require("./CnnPool.js");

var router = Express.Router({ caseSensitive: true });

router.baseURL = "/Profiles";

router.get("/", function(req, res) {
  console.log("GETTER");
  //  req.cnn.chkQry("SELECT * FROM profiles", null, (err, claims) => {
  //    if (!err) res.json(claims);
  //  });
  //  req.cnn.release();
});

router.post("/", function(req, res) {
  var body = req.body;

  console.log("POSTER");

  profile = JSON.stringify(body);
  resProfile = [];

  const spawn = require("child_process").spawn;

  const pythonProcess = spawn("python3", ["./explore.py", profile]);
  pythonProcess.stdout.on("data", data => {
    resProfile.push(data.toString());
  });
  pythonProcess.stderr.on("data", data => {
    console.log("PYTHON ERROR:", data.toString());
  });
  pythonProcess.stdout.on("end", () => {
    result = resProfile[resProfile.length - 1];
    console.log("RESULT:  ", result);
    res.end(result);
  });

  //   assync.waterfall(
  //     [
  //       cb => {
  //         req.cnn.chkQry("INSERT INTO profiles SET ?", body, cb);
  //       },
  //       function(insRes, fields, cb) {
  //         res.status(200).end();
  //         cb();
  //       }
  //     ],
  //     function() {
  //       req.cnn.release();
  //     }
  //   );
});

module.exports = router;
