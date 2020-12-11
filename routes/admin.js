 var express = require('express');
const { route } = require('.');
var router = express.Router();
const BlogController = require('../controller/blogController');

router.get('/',function(req,res,next){
    res.render('admin/login')
})
// 后台管理登录
router.post('/login',function(req,res,next){
    let userName = req.body.userName
    let passWord = req.body.passWord
    if(userName === 'admin' && passWord === '123456'){
        res.send({
            type: "ok",
            state: 0
        })
    }else{
        res.send({
            type: "erro",
            state: 1
        })
    }
})



// 文章渲染
router.get('/index',function(req,res,next){
    res.render('admin/index')
})
router.get('/allblog',function(req,res,next){
    BlogController.index().then(resa=>{
      res.render('admin/order-list',{list:resa})
    })
})  
router.get('/createbook',function(req,res,next){
    res.render('admin/createbook')
})



module.exports = router;
