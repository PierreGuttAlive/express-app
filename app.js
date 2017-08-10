var express = require("express");
var route = require("route");
var app = express();

var portNumber = 3000;

app.listen(portNumber, () => {
    console.log("Server is now listening on port: " + portNumber);
    route();
})
module.exports = app;