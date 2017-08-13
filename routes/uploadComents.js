var fs = require("fs");

function uploadComments(req, res, next){
    res.sendFile("/coments.json");
};

module.exports = uploadComments;