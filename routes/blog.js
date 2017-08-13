function blog(req, res, next) {
    res.sendFile("/public/blog.html");
}

module.exports = blog;