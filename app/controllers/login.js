const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (app) => {
  app.use('/login', router);
};

router.get('/login', (req, res, next) => {

  res.render('login/login', {
    title: 'Generator-Express MVC',
    articles: 'chat'
  });

});


router.get('/check', (req, res, next) => {

  res.render('login/login', {
    title: 'NODE socket chat system',
    articles: 'chat'
  });

});

router.get('/req', (req, res, next) => {


});
