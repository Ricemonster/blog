const express = require('express');
const { ConnectionStates } = require('mongoose');
const router = express.Router();
const tools = require('../tool')
const BlogController = require('../controller/blogController')


// 配置上传文件（图片）存放地址
router.post('/index',tools.multer().upload.single("pic"),function(req,res){
    req.body.imgUrl =  'http://localhost:3000/upload/' + tools.multer().imgUrl
    BlogController.AddArticles(req.body).then(resa=>{
        res.send(resa)
    })
})



module.exports = router;
