let {user} = require('../services');

exports.create = async function (req, res, next) {
    let [id] = await user.createUser(req.body.username, req.body.password, req.body.auth);
    res.json(id);
};

exports.get = async function (req, res, next) {
    let body = await user.getUser(req.body.id);
    res.json(body);
};