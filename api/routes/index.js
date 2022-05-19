let router = require('express').Router();

let controller = require('../controller');

router.get('/user', controller.user.get);

router.post('/user', controller.user.create);

module.exports = router;