function userList(req, res, next) {
    var db = req.db;
    var usercollection = db.get("usercollection");
    usercollection.find({}, {}, (err, docs) => {
        if (err) throw err
        else res.send(docs);
    });
}

module.exports = userList;