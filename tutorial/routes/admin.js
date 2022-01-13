const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
   res.render('add-product', {
      pageTitle: 'Add Product', 
      path: '/admin/add-product', 
      activeAddProduct: true, 
      productCSS: true, 
      formsCSS: true});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
   products.push({title: req.body.title, price: parseFloat(req.body.price).toFixed(2), description: req.body.description});
   res.redirect('/');
});

exports.routes = router;
exports.products = products;