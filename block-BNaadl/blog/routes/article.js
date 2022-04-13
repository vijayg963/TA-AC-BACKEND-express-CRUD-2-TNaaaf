var express = require('express');
var router = express.Router();

var Article = require('../modal/article');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  res.render('articleForm');
});

// router.post('/', (req, res, next) => {
//   var data = req.body;
//   Article.create(data, (err, newArticle) => {
//     if (err) return next(err);
//     res.redirect('/article');
//   });
// });

module.exports = router;
