var fs = require("fs");

function uploadComments(req, res){
    res.sendFile("coments.json");
};

module.exports = uploadComments;