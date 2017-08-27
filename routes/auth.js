var express = require("express");
var router = express.Router();
var validator = require("validator");



router.get("/", function (req, res, next) {
    res.render("auth", {
        title: "Авторизация",
        logged: false,
        correct: null
    })
});

// Getting data from client form and checking it

router.post("/", function(req, res, next){
    var pass = {
        attempt: true
    };
    var body = req.body;
    var db = req.db;
    var usercollection = db.get("usercollection");

    // Checking fileds to be filled

    for (field in body) {
        if (validator.isEmpty(body[field])) {
            pass.attempt = false;
            pass.reason = "Все поля должны быть заполнены.";
        };
    };

    // Comparison of input passwords

    if (!validator.equals(body.password, body.confpassword)) {
        pass.attempt = false;
        pass.reason = "Пароли не совпадают.";
    };

    //Checking for username or email matches

    usercollection.find({})
        .then((docs) => {
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].username == body.username) {
                    pass.attempt = false;
                    pass.reason = "Имя занято.";
                } else if (docs[i].email == body.email) {
                    pass.attempt = false;
                    pass.reason = "Пользователь с таким email уже зарегистрирован.";
                };
            };
        })
        .then(() => {
            if (pass.attempt === true) {
                usercollection.insert(body);
                res.send("Вы успешно зарегистрированы, " + body.username + ". Добро пожаловать!");
            } else {
                res.send(pass.reason + " Вернитесь на страницу регистрации.");
            };
        });
});



module.exports = router;