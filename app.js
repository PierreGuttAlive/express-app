var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var pug = require("pug");

var index = require("./routes/index.js");
var blog = require("./routes/blog.js");
var uploadComents = require("./routes/uploadComents.js");
var addComent = require("./routes/addComent.js");

var app = express();

var portNumber = 3000;

// Use stuff
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.get("/", index);
app.get("/blog", blog)
app.post("/addcoment", addComent);
app.get("/uploadcoments", uploadComents);

app.listen(portNumber, () => {
    console.log("Server is now listening on port: " + portNumber);
});
module.exports = app;