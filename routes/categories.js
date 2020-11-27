var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('这是来自分类的信息')
});

module.exports = router;
