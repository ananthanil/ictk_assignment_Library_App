const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Book');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    // productId : Number,
    // productName : String,
    // productCode : String,
    // releaseDate : String,
    // description : String,
    // price : Number,
    // starRating :Number,
    // imageUrl : String
    uFname : String,
    uLname : String,
    uEmail : String,
    uPhone : Number,
    uPassword : String 

});

var logindata = mongoose.model('login', NewProductSchema); //UserData is the model and NewBookData is the schema

module.exports = logindata;