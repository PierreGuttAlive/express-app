require("dotenv").config();
var monk = require("monk");
var db = monk(`${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB}`);

module.exports = db;