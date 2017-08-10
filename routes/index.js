function index(req, res) {
    res.sendFile("/public/index.html");
}

module.exports = index;