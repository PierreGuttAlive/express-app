var express = require("express");
var path = require("path");

var index = require("./routes/index");
var blog = require("./routes/blog");
var uploadComents = require("./routes/uploadComents");
var addComent = require("./routes/addComent");

var app = express();

var portNumber = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Routes

app.use("/", index);
app.use("/blog", blog);
app.use("/addcoment", addComent);
app.use("/uploadcoments", uploadComents);

app.listen(portNumber, () => {
    console.log("Server is now listening on port: " + portNumber);
});
module.exports = app;