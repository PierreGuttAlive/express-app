var path = require("path")

function blog(req, res, next) {
    res.render("blog.pug")
}

module.exports = blog;