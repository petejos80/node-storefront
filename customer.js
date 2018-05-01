// ==================================================
// DATABASE CONNECTION INFO + GLOBAL VARIABLES
// ==================================================

var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table")

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "storefront_db"
});

//Validate connection to database
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");
  });


// ==================================================
// FUNCTIONS
// ==================================================

//Exectues queries on DB
function executeQuery(sql, cb) {
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        cb(result);
    });
}

//Prints products table
function fetchProducts(res){
    db.query("SELECT * FROM products", function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.table(result)
        }

    // res.write("<table>");
    // res.write("<tr>");
    // for(var column in result[0]){
        // res.write("<td><label>" + column + "</label></td>");
    // }
    // res.write("</tr>");
    // for(var row in result){
        // res.write("<tr>");
        // for(var column in result[row]){
            // res.write("<td><label>" + result[row][column] + "</label></td>");       
        // res.write("</tr>");         
    })
    // res.write("</table>");
};




// ==================================================
// WORKFLOW
// ==================================================

fetchProducts();





