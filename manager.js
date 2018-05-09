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

//   //Create variables for responses to prompt
//   var managerSelections = inquirer.prompt([
//     {
//         type: "confirm",
//         name: "mood",
//         message: "Are you feeling alright?",
//         default: true
//       },
//     {
//         type: 'list',
//         name: 'actions',
//         message: "What would you like to do?",
//         choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
//     }
//     ]).then(function(answer) {
//         console.log(answer);
        // switch (action) {
        //     case "View Products for Sale":
        //       apples();
        //       break;
            
        //     case "bananas":
        //       bananas();
        //       break;
        //     }
    // });

// Define process.argv for each of the user's selections
// var action = managerSelections;
// var value = process.argv[3];
// console.log(inquire.prompt.choices);
// SWITCH CASE //
/* The switch-case directs which function gets run depending on user's selection */
// =========================================================================================

// switch (action) {
//     case "View Products for Sale":
//       apples();
//       break;
    
//     case "bananas":
//       bananas();
//       break;
//     }

// FUNCTIONS // 
// In this app, there are 4 different functions that are called using the switch cases above.
// ==========================================================================================

function apples () {
    console.log("apples")
}

function bananas () {
    console.log("bananas")
}




function apples () {
    console.log("apples")
}

function bananas () {
    console.log("bananas")
}



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
                  apples();
                  break;
                
                case "View Low Inventory":
                  bananas();
                  break;
                }
            })
        };