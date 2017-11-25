var express = require("express");
var router = express.Router();
var validator = require("validator");
var users = require("../db").get("users");



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

    // Correct email

    if (!validator.isEmail(body.email)){
        pass.attempt = false;
        pass.reason = "Некорректный email.";
    };

    //Checking for username or email matches

    users.find({})
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
                users.insert(body);
                res.send("Вы успешно зарегистрированы, " + body.username + ". Добро пожаловать!");
            } else {
                res.send(pass.reason + " Пожалуйста вернитесь на страницу регистрации.");
            };
        });
});



module.exports = router;