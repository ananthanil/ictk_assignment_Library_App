const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Book');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookAuthorname : String,
    bookReleasedate : String,
    bookDesc : String,
    bookPrice : Number,
    bookRate : Number,
    bookImageurl : String
});

var bookdata = mongoose.model('book', NewProductSchema); //UserData is the model and NewBookData is the schema

module.exports = bookdata;