var fs = require("fs");

function addComent(req, res, next) {
    console.log(req.body);
};

module.exports = addComent;