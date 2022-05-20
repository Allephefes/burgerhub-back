let router = require('express').Router();

let controller = require('../controller');

router.get('/product', controller.product.get);

router.post('/product', controller.product.create);

router.put('/product', controller.product.update);

router.delete('/product', controller.product.delete);

module.exports = router;