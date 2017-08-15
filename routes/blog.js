var path = require("path")

function blog(req, res, next) {
    res.render("blog.pug", {
        title: "Блог"
    });
}

module.exports = blog;