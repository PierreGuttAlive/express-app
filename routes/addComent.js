var fs = require("fs");

function addComent(req, res, next) {
    var date = new Date();
    console.log("--------------------- " + date);
    console.log(req.body);
    console.log(typeof req.body);
    console.log("---------------------");

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
};

module.exports = addComent;