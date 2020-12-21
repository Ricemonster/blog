var express = require('express');
var router = express.Router();
var multer = require('multer');
let upload = multer({dest: '/upload'}) // 静态存放地址
router.post('/index',function(req,res){
    console.log(req.files)
    console.log(req.body)
})

module.exports = router;
