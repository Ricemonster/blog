const express = require('express')
const router = express.Router();
const tools = require('../tool')


// 配置上传文件（图片）存放地址
router.post('/index',tools.multer().single("pic"),function(req,res){
    // req.body
    // req.file
    let a = {
        body: req.body,
        file: req.file
    }
    console.log(a)
    res.send(req.body)
})



module.exports = router;
