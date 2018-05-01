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
    console.log("Connected to Storefront database");
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
function fetchProducts(){
    db.query("SELECT * FROM products", function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.table(result)
        } 
    });
};

function promptUser() {
    var itemQuestions = inquirer.prompt([
        {
          type: 'input',
          name: 'item_id',
          message: 'What is the item_id of the product you wish to buy?',
        },
        {
          type: 'input',
          name: 'stock_quantity',
          message: 'How many would you like to buy?',
        },
    ]).then(function(purchaseItem) {
      var query = db.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [purchaseItem.stock_quantity, purchaseItem.item_id],
        function(err, res) {
          fetchProducts();
        });
    });
    };


// ==================================================
// WORKFLOW
// ==================================================

fetchProducts();
promptUser();





