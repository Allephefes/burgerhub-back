var router = require('express').Router();
router.use('/products', require('./Product/ProductsRoutes'));
router.use('/posts', require('./Post/PostRoutes'));

module.exports = router;