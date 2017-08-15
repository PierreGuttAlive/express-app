var path = require("path");

function index(req, res, next) {
    res.render("index.pug", {
        title: "Главная"
    });
}

module.exports = index;