let {product} = require('../services');

exports.create = async function (req, res, next) {
    let body = req.body;
    let [id] = await product.createProduct(body.name, body.part, body.price);
    res.json(id);
};

exports.get = async function (req, res, next) {
    let body = await product.getProduct(req.body.id);
    res.json(body);
};

exports.update = async function (req, res, next) {
    let body = req.body;
    await product.updateProduct(body.id, body.name, body.part, body.price);
    res.json(body);
};

exports.delete = async function (req, res, next) {
    let [id] = await product.deleteProduct(req.body.id);
    res.json(id);
};