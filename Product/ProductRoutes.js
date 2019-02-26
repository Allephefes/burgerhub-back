


var router = require('express').Router();

var controller = require('./ProductController');

router.post('/insert',controller.insert);

router.get('/getall',controller.getall);

router.post('/update',controller.update);

router.post('/delete',controller.delete);



module.exports = router;

