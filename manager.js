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
db.connect(function(err) {
    if (err) throw err;
    // console.log(managerSelections.choices);
    listOptions();
  });

// ==========================================================================================  
// FUNCTIONS // 
// In this app, there are 4 different functions that are called using the switch cases above.
// ==========================================================================================

// List function 1 - show products available for sale
function viewProducts() {
    db.query("SELECT * FROM products", function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.table(result)
        } 
    })
};

// List function 2 - show products available for sale
function viewLowInventory() {
    db.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.table(result);
        }
    })
};
    
            // var array1 = ['a', 'b', 'c'];
            // array1.forEach(function(element) {
            // console.log(element);

// Prompts manager with available actions
function listOptions() {
    var managerSelections = inquirer.prompt([
        {
            type: 'list',
            name: 'actions',
            message: "What would you like to do?",
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        },
// Switch case is used to invokes functions depending on which menu item is chosen 
    ]).then(function(optionSelect) {
        // console.log(optionSelect.actions)
        switch (optionSelect.actions) {
                case "View Products for Sale":
                  viewProducts();
                  break;
                
                case "View Low Inventory":
                  viewLowInventory();
                  break;

                case "Add to Inventory":
                  bananas();
                  break;

                case "Add New Product":
                  bananas();
                  break;
                }
            })
        };

        setTimeout(function () {
            console.log('boo')
          }, 100)