/** 
 * !处置所有关于网志的操作 - 添加 删除 更新 修改 
*/ 
var express = require('express');
var router = express.Router();
const BlogController = require('../controller/blogController');

// ! 删除一篇文章
router.delete('/',async function(req,res,next){
  let id = req.body.id // 文章id
  let rss = await BlogController.Deleteblog(id);
  res.send(rss)
})
// ! 文章分页 - (page,limit)
router.get('/:page/:limit',async function(req,res,next){
  let page = req.params.page
  let limit = req.params.limit
  res.send(await BlogController.getList(page,limit))
})






module.exports = router;
