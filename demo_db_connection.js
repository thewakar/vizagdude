var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com:3306",
  user: "divakar@vizag.tk",
  password: "Divakar@1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
