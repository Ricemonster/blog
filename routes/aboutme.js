var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('开始介绍我把');
});

module.exports = router;
