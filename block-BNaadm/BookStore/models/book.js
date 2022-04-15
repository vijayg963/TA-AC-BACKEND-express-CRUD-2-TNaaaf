var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
    author: String,
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
