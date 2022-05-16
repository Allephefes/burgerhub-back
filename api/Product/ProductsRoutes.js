let router = require('express').Router();

let controller = require('./ProductsController');

router.post('/insert', controller.insert);

router.get('/getall', controller.getall);

router.post('/update', controller.update);

router.post('/delete', controller.delete);



module.exports = router;

