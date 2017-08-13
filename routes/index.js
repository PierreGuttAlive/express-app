function index(req, res, next) {
    res.sendFile("/public/index.html");
}

module.exports = index;