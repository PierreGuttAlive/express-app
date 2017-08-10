var app = require("./app");
var index = require("/routes/index"),
    blog = require("/routes/blog"),
    addComent = require("/routes/addcoment"),
    uploadComents = require("/routes/uploadcoments");

function route(req, res) {

    app.use(Express.static("public", (err, req, res, next) => {
        if (err.code == "ENOENT") res.status("404").send("Not found");
        else res.status("500").send("There is an error, sorry ;c");
    }));

    app.get("/", (req, res) => {
        index(req, res);
    });

    app.get("/blog", (req, res) => {
        blog(req, res);
    });

    app.post("/addcoment", (req, res) => {
        addComment(req, res);
    });

    app.get("/uploadcoments", (req, res) => {
        uploadComents(req, res);
    })
};

module.exports = route;