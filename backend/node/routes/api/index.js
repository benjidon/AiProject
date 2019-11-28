const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/claims', (req, res, next) => {

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'svm',
      password : 'password',
      database : 'claims_db'
    });

    var sql = "SELECT * FROM claims";
     
    connection.connect();
     
    connection.query(sql, function (error, result, fields) {
      if (error) throw error;
      console.log('The claims have been retrieved');
      res.write(JSON.stringify(result));
      res.end();
    });
     
    connection.end();
})

router.post('/query', (req, res, next) => {

    const data = req.body;
    var name = data.name;
    var address = data.address;

    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'svm',
      password : 'password',
      database : 'claims_db'
    });

    var sql = "INSERT INTO claims (name, address) VALUES ?";
    var value = [
      ['\'' + name + '\'', '\'' + address + '\''],
    ];
     
    connection.connect();
     
    connection.query(sql, [value], function (error, results, fields) {
      if (error) throw error;
      console.log('The claim for ' + name + ' has been added');
    });
     
    connection.end();
})

module.exports = router;
