let {user} = require('../services');

exports.create = async function (req, res, next) {
    let body = req.body;
    let [id] = await user.createUser(body.username, body.password, body.auth);
    res.json(id);
};

exports.get = async function (req, res, next) {
    let body = await user.getUser(req.body.id);
    res.json(body);
};

exports.update = async function (req, res, next) {
    let body = req.body;
    await user.updateUser(body.id, body.username, body.password, body.auth);
    res.json(body);
};

exports.delete = async function (req, res, next) {
    let [id] = await user.deleteUser(req.body.id);
    res.json(id);
};