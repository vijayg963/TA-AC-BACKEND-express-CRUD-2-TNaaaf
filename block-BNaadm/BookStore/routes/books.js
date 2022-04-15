var express = require('express');
var router = express.Router();

var Book = require('../models/book');
var Comment = require('../models/comment');

/* GET book list. */
router.get('/', function (req, res, next) {
  Book.find({}, (err, books) => {
    if (err) return next(err);
    res.render('books', { books });
  });
});

// Book Form
router.get('/new', (req, res, next) => {
  res.render('addBook');
});

// Capturing the data
router.post('/', (req, res, next) => {
  var data = req.body;
  Book.create(data, (err, newBook) => {
    if (err) return next(err);
    console.log(data);
    res.redirect('/books');
  });
});

// Fetch Single book data
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) return next(err);
    res.render('bookDetails', { book });
  });
});

//edit an article
router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) return next(err);
    res.render('editBookForm', { book });
  });
});

// Update article
router.post('/:id', (req, res) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, (err, updatedData) => {
    if (err) return next(err);
    res.redirect('/books/' + id);
  });
});

// delete article
router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err, book) => {
    if (err) return next(err);
    res.redirect('/books');
  });
});

router.post('/:id/comments', (req, res) => {
  var id = req.params.id;
  req.body.bookId = id;
  Comment.create(req.body, (err, comment) => {
    if (err) return next(err);
    res.redirect('/books/' + id);
  });
});

module.exports = router;
