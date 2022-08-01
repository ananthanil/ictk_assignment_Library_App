const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Book');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    uFname : String,
    uLname : String,
    uEmail : String,
    uPhone : Number,
    uPassword : String, 

});

var logindata = mongoose.model('login', NewProductSchema); //UserData is the model and NewBookData is the schema

module.exports = logindata;