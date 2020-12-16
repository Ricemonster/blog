var express = require('express');
var router = express.Router();
const BlogController = require('../controller/blogController');

/* GET home page. */
// 获取所有博客
router.get('/', async function(req, res, next) {
  // awaite 返回的是 promise 所有需要 then 来接收
  BlogController.index().then(resa=>{
    res.render('index',{state:0,list:resa})
  })
});
// 增加一篇博文
router.post('/',function(req,res,next){
  BlogController.AddArticles(req.body).then(resa=>{
    res.send(resa)
  })
});
// 更新一篇博文
router.patch('/:id',(req,res,next)=>{
  let _id = req.params.id
  BlogController.UpdateArticles(_id).then(resa=>{
    res.send(resa)
  })
})






module.exports = router;
