"use strict";

var express = require('express');
var indexWebRouter = require('./router/index');
require('dotenv').config();
var app = express();
var cors = require('cors');
app.use(cors());
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', indexWebRouter);
app.get('/', function (req, res) {
  res.send('Access Denied');
});
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("PORT is listen");
  }
});
module.exports = app;