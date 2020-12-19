// ! 模块导入
const createError = require('http-errors')
 ,express = require('express')
 ,path = require('path')
 ,cookieParser = require('cookie-parser')
 ,logger = require('morgan')
 ,bodyParser = require('body-parser')
 ,formidable = require('formidable')
 

// !连接数据库并使用
const mongoose = require('mongoose')
require('dotenv').config() // 加载环境变量
mongoose.connect(process.env.DBURL,{useNewUrlParser: true})
.then(()=> console.log('\033[42;30m MongoDB \033[40;32m 数据库连接成功\033[0m'))
.catch((err)=> console.log(err))


// * 注册 express
var app = express();

// ! POST参数设置
app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
  extended: true
}));

// ! 登录拦截器
app.use(cookieParser())
app.use(function(req,res,next){
  let url = req.originalUrl;//获取浏览器中当前访问的nodejs路由地址；
  let userCookies= req.cookies.userCookies;// 查看是否存入cookie
  if(url === '/admin/index' && userCookies === undefined){
    return res.render('admin/login')//页面重定向；
  }
  next();
})
// ! 路由分发
// 路由导入
const indexRouter = require('./routes/index'); // 首页
const blogRouter = require('./routes/blog'); // 网志
const categoriesRouter = require('./routes/categories'); // 分类
const tagsRouter = require('./routes/tags'); // 标签
const aboutmeRouter = require('./routes/aboutme'); // 关于我
const adminRouter = require('./routes/admin') // 后台路由
// 路由注册
app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/categories',categoriesRouter);
app.use('/tags',tagsRouter);
app.use('/about',aboutmeRouter);
app.use('/admin',adminRouter);

// ! ejs模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ! 静态目录设置
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ! 配置图片上传
app.post('/upload',function(req,res){
  let form = new formidable.IncomingForm();
  form.parse(req, function(error, fields, files){
    // 读取文件流并写入到public/test.png
    fs.writeFileSync('public/test.png', fs.readFileSync(files.upload.path));
    //重定向到结果页
    // res.redirect('/public/result.html');
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 跨域设置
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


module.exports = app;
