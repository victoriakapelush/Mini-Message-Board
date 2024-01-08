var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Type your new message', form: {} });
});

module.exports = router;

