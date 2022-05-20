let router = require('express').Router();

let controller = require('../controller');

router.get('/user', controller.user.get);

router.post('/user', controller.user.create);

router.put('/user', controller.user.update);

router.delete('/user', controller.user.delete);

module.exports = router;