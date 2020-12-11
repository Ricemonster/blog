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

})





module.exports = router;
