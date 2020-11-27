/**
 * 网志
 */
var express = require('express');
const { route } = require('.');
var router = express.Router();

router.all('/',(res,req,next)=>{
  res.send('显示全部网志');
})
router.all('/:blogname',function(req,res,next){
  // 拦截器，因为express会有优先使用靠前的路由，可以使用next来跳到下一条规则
  next();
})
router.get('/:blogname', function(req, res, next) {
  let blogname = req.params.blogname
  if(blogname == 'blog'){
    res.send('显示全部网志')
  }else{
    res.send(blogname)
  }
});

module.exports = router;
