const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { displayDepartments, displayRoles, displayEmployees } = require("./helpers/display");

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
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role\n"]
    }
];

// prompts the user when initialized
const init = async () => {
    const promptData = await inquirer.prompt(startPrompts);
    switch(promptData.option) {
        case "View all departments":
            displayDepartments(db);
            break;
        case "View all roles":
            displayRoles(db);
            break;
        case "View all employees":
            displayEmployees(db);
            break; 
    }
    // init();
}

init();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});