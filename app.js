var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var pug = require("pug");
var favicon = require('serve-favicon');
var session = require("express-session");
var mongo = require("mongodb");
var monk = require("monk");


// Some routes

var index = require("./routes/index");
var blog = require("./routes/blog");
var userList = require("./routes/userList");
var auth = require("./routes/auth");

var portNumber = 3000;

// Engines and basic middlewares

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "Алина"
}));
app.use(favicon(__dirname + '/public/favicon.ico'));
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/
app.get("/", (req, res, next) =>{
    //console.log(req.session);
    if (!req.session.user) req.session.user = {};
    if (!req.session.user.visitNumber) req.session.user.visitNumber = 1;
    else req.session.user.visitNumber++;
    console.log(req.session.user.visitNumber);
    next();
});


// Connecting routes

app.get("/", index);
app.use("/blog", blog);
app.get("/userlist", userList);
app.use("/auth", auth);

app.listen(portNumber, () => {
    console.log("Server is now listening on port: " + portNumber);
});
module.exports = app;