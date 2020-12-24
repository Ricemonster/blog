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
//blog的分页组件
router.get('/:page',async function(req,res,next) {
  let nowpage = req.params.page
  let resa = await BlogController.Datafind(nowpage)
  // 获取当前年份
  let now = new Date();
  let year = now.getFullYear() + ''; //得到年份
  for(let i=0;i<resa.data.length;i++) {
    let time = resa.data[i].intime.slice(0, 4)
    if(year === time){
      resa.data.splice(i,0,{ year:true,title:year })
      year -= 1
    }
  }
  res.render('blog',{list:resa.data,nowpage:nowpage,allpage:resa.totalPage})
})





module.exports = router;
