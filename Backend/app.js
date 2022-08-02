const express = require('express');
const logindata = require('./src/Model/logindb')
const bookdata = require('./src/Model/bookdb')
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.get('/books',function(req,res){
  bookdata.find()
  .then(function(books){
       res.send(books);
  });
});

app.post('/insert',function(req,res){
  console.log(req.body);
  var book = {       
    bookName : req.body.book.bookName,
    bookAuthorname : req.body.book.bookAuthorname,
    bookReleasedate : req.body.book.bookReleasedate,
    bookPrice : req.body.book.bookPrice,
    bookRate : req.body.book.bookRate,
    bookImageurl : req.body.book.bookImageurl,
    }       
 var book = new bookdata(book);
 book.save();
});

app.post('/signup',function(req,res){
  console.log(req.body);
  var signup = {       
    uFname : req.body.login.uFname,
    uLname : req.body.login.uLname,
    uEmail : req.body.login.uEmail,
    uPhone : req.body.login.uPhone,
    uPassword : req.body.login.uPassword,
    }       
 var signup = new logindata(signup);
 signup.save();
});

app.delete('/remove/:id',(req,res)=>{
  id = req.params.id;
  bookdata.findByIdAndDelete({"_id":id})
  .then(()=>{
    console.log('success')
    res.send();
  })
});

app.listen(3006,function(){
    console.log('listening to port 3006');
  });