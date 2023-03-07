const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { displayDepartments, displayRoles, displayEmployees } = require("./helpers/display");
const { addDepartment } = require("./helpers/add"); 

const PORT = 30001;
const app = express();

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "root1234",
      database: "employee_db"
    },
    console.log("connected to the db")
  );

// starter prompts to the user
const startPrompts = [
    {
        type: "list",
        message: "Select an option:",
        name: "option",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department"]
    }
];

// prompts the user when initialized
const init = async () => {
    inquirer
        .prompt(startPrompts)
        .then((data) => {
            switch(data.option) {
                case "View all departments":
                    displayDepartments(db);
                    break;
                case "View all roles":
                    displayRoles(db);
                    break;
                case "View all employees":
                    displayEmployees(db);
                    break; 
                case "Add a department":
                    addDepartment(db);
                    break; 
            }
        })
        .then(() => init());
}

init();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});