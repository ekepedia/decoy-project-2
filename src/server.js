"use strict";
require('dotenv').config();

const express  = require('express'),
      app      = express(),
      flash    = require('connect-flash');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(require('express').static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ limit: '10mb',extended: true }));
app.use(require('cookie-parser')());
app.use(flash());

app.use(require('express-session')({ secret: 'sbepro' }));

app.get("*", function (req, res) {
    res.render('home');
});

app.listen((process.env.PORT || 8080), function () {
    console.log('App listening on port ', (process.env.PORT || 8080));

});