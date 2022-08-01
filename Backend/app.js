const express = require('express');
const logindata = require('./src/Model/logindb')
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.listen(3006,function(){
    console.log('listening to port 3006');
  });