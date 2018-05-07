// ==================================================
// DATABASE CONNECTION INFO + GLOBAL VARIABLES
// ==================================================

var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table")

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Database credentials
  user: "root",
  password: "",
  database: "storefront_db"
});

//Validate connection to database
//Validate connection to database
db.connect(function(err) {
    if (err) throw err;
    // console.log(itemQuestions.choices);
    listOptions();
  });

// Define process.argv for each of the user's selections
var action = itemQuestions;
// var value = process.argv[3];
console.log(itemQuestions);
// SWITCH CASE //
/* The switch-case directs which function gets run depending on user's selection */
// =========================================================================================

var itemQuestions = inquirer.prompt([
    {
        type: 'list',
        name: 'actions',
        message: "What would you like to do?",
        choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
    },
]);

console.log(JSON.stringify(answers, null, '  '));

switch (action) {
    case "View Products for Sale":
      apples();
      break;
    
    case "bananas":
      bananas();
      break;
    }

// FUNCTIONS // 
// In this app, there are 4 different functions that are called using the switch cases above.
// ==========================================================================================

// Prints products table
function apples() {
        console.log("These are the products for sale");
};

function bananas() {
        console.log("Hello there this is products 2 number 2 number 2");
};

inquirer.prompt(itemQuestions.answers).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });










// Prompts manager with available actions
function listOptions() {
    var itemQuestions = inquirer.prompt([
        {
            type: 'list',
            name: 'actions',
            message: "What would you like to do?",
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        },
    ]).then(function(purchaseItem) {
    db.query("SELECT * FROM products WHERE item_id= ?", [purchaseItem.item_id], function (err, result){
        console.log("--------------------------")
        if (parseInt(purchaseItem.stock_quantity) > result[0].stock_quantity) {
            console.log("Not enough Inventory, please place your order again");
            promptUser();
        } else {
          db.query(
            "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
            [purchaseItem.stock_quantity, purchaseItem.item_id],
            function(err, res) {
              if (err) throw err;
              var itemID = String(purchaseItem.item_id);
              console.log("Your total is $" + purchaseItem.stock_quantity * result[0].price)
              db.end();
            })
        }}
    )}
)}
