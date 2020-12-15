 var express = require('express');
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
router.get('/allblog/:page',async function(req,res,next){
    let nowpage = req.params.page
    let resa = await BlogController.getList(nowpage,15)
    // data就是分页的数据,all是所有数据的数目
    res.render('admin/order-list',{list:resa.data,allpage:resa.totalPage,nowpage:nowpage})
})  
router.get('/createbook',function(req,res,next){
    res.render('admin/createbook')
})

module.exports = router;
