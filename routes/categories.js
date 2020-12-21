var express = require('express');
var router = express.Router();

// 分类路由
router.get('/', function(req, res, next) {
  res.send('这是来自分类的信息')
});

module.exports = router;
