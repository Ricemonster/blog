const express = require('express');
const { ConnectionStates } = require('mongoose');
const router = express.Router();
const tools = require('../tool')


// 配置上传文件（图片）存放地址
router.post('/index',tools.multer().single("pic"),function(req,res){
    console.log('路由触发')
    // req.body
    // req.file
    console.log('请求的数据',req.body)
    res.send(req.body)
})



module.exports = router;
