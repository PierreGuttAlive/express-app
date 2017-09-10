const path = require("path");
const fs = require("fs");
const express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
    console.log("fuck");
    res.render("blog.pug", {
        title: "Блог"
    });
});

router.get("/uploadcoments", (req, res, next) => {
    res.send(fs.readFileSync("./coments.json"));
});

router.post("/addcoment", (req, res, next) => {
    var date = new Date();
    console.log("--------------------------------------------------- ");
    console.log(req.body);
    console.log("--------------------------------------------------- ");

    // gaining coments and pushing new in a massive
    try {
        var buffer = fs.readFileSync("./coments.json");
        var coments = JSON.parse(buffer);

        coments.push(req.body);
        fs.writeFileSync("coments.json", JSON.stringify(coments, null, " "));
        res.status(200).end();
    } catch(err) {
        res.status("500").send("something went wrong");
    };
});

module.exports = router;