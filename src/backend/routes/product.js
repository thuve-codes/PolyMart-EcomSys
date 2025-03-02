const express = require('express');
const { getProducts } = require('../controllers/productControllers');

const { getSingleproduct } = require('../controllers/productControllers');

const router = express.Router();

router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleproduct);

module.exports = router;