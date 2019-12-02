var Express = require('express');
var async = require('async');
var mysql = require('mysql');
var CnnPool = require('../CnnPool.js');

var router = Express.Router({caseSensitive: true});

router.baseURL = '/Claims';

router.get('/', function(req, res) {
	req.cnn.chkQry("SELECT * FROM claims", null,
	 (err, claims) => {
		 if (!err)
			 res.json(claims);
	 });
	req.cnn.release();
});

router.post('/', function(req, res) {
   var body = req.body;

   async.waterfall([
   (cb) => {
		req.cnn.chkQry("INSERT INTO claims SET ?", body, cb);
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
