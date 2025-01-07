"use strict";

require('dotenv').config();
var Sequelize = require("sequelize");
var connection = new Sequelize({
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "postgres"
});
connection.authenticate().then(function () {
  console.log("Database connection has been established successfully.");
})["catch"](function (err) {
  console.error("Database connection failed:", err);
});
module.exports = connection;