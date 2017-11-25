function userList(req, res, next) {
    
    var users = require("../db").get("usercollection");
    users.find({}, {}, (err, docs) => {
        if (err) throw err
        else res.send(docs);
    });
}

module.exports = userList;