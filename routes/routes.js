var users = require('../data/users')['users'];
var currentUser = {};

exports.login = function(req, res) {
    var isEmail = req.body.email in users ? true : false;
    var isPass = isEmail && req.body.pwd === users[req.body.email].pwd ? true : false;

    if (isEmail && isPass) {
        currentUser = req.body.email;
        res.send({name: users[currentUser].name});
    } else {
        res.status(500).send({ success: false });
    }
};

exports.member = function(req, res) {
    if (currentUser in users) {
        res.send({
            name: users[currentUser].name,
            id: users[currentUser].id,
            desg: users[currentUser].desg,
            loc: users[currentUser].loc
        });
    } else {
        res.send(500, { success: false });
    }

    currentUser = '';
};
