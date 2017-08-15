var fs = require("fs");

function uploadComents(req, res, next) {
    coments = fs.readFileSync("./coments.json");
    res.send(coments);
};

module.exports = uploadComents;