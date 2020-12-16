var express = require('express');
var router = express.Router();

// 利用拦截器做检查用户名是否合法
let users = {
  'Ricemonster':{
    name: 'guolei',
    website: 'www.baidu.com'
  }
}
router.all('/',(req,res,next)=>{
  res.send('显示全部tags数据')
})
router.all('/:tagName',(req,res,next)=>{
  if(users[req.params.tagName] == 'tags'){
    res.send('显示全部标签')
  }
  if(users[req.params.tagName]){
    next()
  }else{
    res.send('用户不存在');
  }
})
router.get('/:tagName', function(req, res, next) {
});

module.exports = router;
