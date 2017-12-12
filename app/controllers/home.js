const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (app) => {
  app.use('/home', router);
};

router.get('/main', (req, res, next) => {

	res.render('home/main',{});







 	res.end(req.session.username);
});


router.get('/add', (req, res, next) => {


});

router.get('/del', (req, res, next) => {


});
