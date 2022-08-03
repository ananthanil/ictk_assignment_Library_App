const express = require('express');
const logindata = require('./src/Model/logindb')
const bookdata = require('./src/Model/bookdb')
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())

username="admin";
password="1234";

function verifyToken(req,res,next)
{
  if(!req.headers.authorization)
    {
      return res.status(401).send('Unauthorized request')
    }
  let token=req.headers.authorization.split('')[1]
  if(token=='null')
  {
    return res.status(401).send('Unauthorised request')
  }
  let payload=jwt.verify(token,'secretkey')
  console.log(payload)
  if(!payload)
  {
    return res.status(401).send('Unauthorized request')
  }
  req.userId=payload.subject
  next()
}

app.get('/books',function(req,res){
  bookdata.find()
  .then(function(books){
       res.send(books);
  });
});

app.post('/login',(req, res) => {
  console.log('inside');
  let userData = req.body
    if(!username){
      res.status(401).send('Invalid Password')
    }else
      if( password !== userData.password){
        res.status(401).send('Invalid Password')
      }else{
        let payload={subject:username+password}
        let token=jwt.sign(payload,'secretkey')
        res.status(200).send({token})
    }
})

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

app.get("/:id",(req, res)=>{
  const id = req.params.id;
  bookdata.findOne({_id:id}).then((book)=>{
    res.send(book);
  });
});

app.delete('/remove/:id',(req,res)=>{
  id = req.params.id;
  bookdata.findByIdAndDelete({"_id":id})
  .then(()=>{
    console.log('success')
    res.send();
  })
});

app.put('/update',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  bookName = req.body.bookName,
  bookAuthorname = req.body.bookAuthorname,
  bookReleasedate = req.body.bookReleasedate,
  bookPrice = req.body.bookPrice,
  bookRate = req.body.bookRate,
  bookImageurl = req.body.bookImageurl
  bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"bookName":bookName,
                                      "bookAuthorname" : bookAuthorname,
                                      "bookReleasedate" : bookReleasedate,
                                      "bookPrice" : bookPrice,
                                      "bookRate" : bookRate,
                                      "bookImageurl" : bookImageurl
                                }})
                                .then(function(){
                                  res.send();
                                })
});

app.listen(3006,function(){
    console.log('listening to port 3006');
  });