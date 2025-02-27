const express = require('express');
const router = express.Router();

//Routes al
const categoryRoute = require('./categories.js');
const productRoute = require('./products.js');
const userRoute = require('./users.js');
const authRoute = require('./auth.js');

//Routes yoolarını tanımlama
router.use('/categories', categoryRoute);
router.use('/products', productRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);

module.exports = router;