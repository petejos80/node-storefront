// DATABASE CONNECTION INFO
// GLOBAL VARIABLES
// ====================

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay_db"
});

//Connection to database
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");
  });



// FUNCTIONS
// ====================









