var express = require('express');
var router = express.Router();
const BlogController = require('../controller/blogController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let resa = await BlogController.getList(1,15)
  // list为博文列表,当前页和总页数
  res.render('index',{state:0,list:resa.data,nowpage:1,allpage:resa.totalPage})
});
// 带分页的home page
router.get('/:page',async function(req,res,next){
  let page = req.params.page
  if(page === 'about'){
    let resa = await BlogController.findArticles('5fe2bc5603b9a03b28d54a6b')
    res.render('about',{data:resa[0]})
  }else{
    let nowpage = req.params.page
    let resa = await BlogController.getList(nowpage,15)
    res.render('index',{state:0,list:resa.data,nowpage:nowpage,allpage:resa.totalPage})
  }
})
// 跳转到详情页面
router.get('/detail/:detailId',async function(req,res,next){
  let _id = req.params.detailId
  let resa = await BlogController.findArticles(_id)
  res.render('detailpage',{data:resa[0]})
})




// 增加一篇博文
router.post('/',async function(req,res,next){
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
