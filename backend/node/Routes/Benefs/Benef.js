var Express = require('express');
var async = require('async');
var mysql = require('mysql');

var router = Express.Router({caseSensitive: true});

router.baseURL = '/Benefs';

router.get('/', function(req, res) {
	req.cnn.chkQry("SELECT * FROM benefs", null,
	 (err, claims) => {
		 if (!err)
			 res.json(claims);
	 });
	req.cnn.release();
})

router.post('/', function(req, res) {
   var body = req.body;

   async.waterfall([
   (cb) => {
		req.cnn.chkQry("INSERT INTO benefs SET ?", body, cb);
   },
   function(insRes, fields, cb) {
      res.status(200).end();
      cb();
   }],
   function() {
      req.cnn.release();
   });
});

module.exports = router;
