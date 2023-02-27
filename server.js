const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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

  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });