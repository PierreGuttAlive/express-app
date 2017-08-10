function blog(req, res) {
    res.sendFile("/public/blog.html");
}

module.exports = blog;