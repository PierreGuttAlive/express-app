var path = require("path");

function index(req, res, next) {
    res.render("index.pug")
}

module.exports = index;