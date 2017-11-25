var monk = require("monk");
var db = monk('localhost:27017/express_app');

module.exports = db;