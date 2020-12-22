/**
 * 工具模块
 * */
const multer = require('multer')
const path = require('path')
let imgUrl = ''
let tools = {
    // 上传图片模块
    multer(){
        let storage = multer.diskStorage({
            //配置上传的目录
            destination:function (req,file,cb) {
                cb(null,'public/upload')
            },
            // 修改上传后的文件名
            filename:function (req,file,cb) {
                // 1.获取后缀名
                let extname = path.extname(file.originalname)
                // 2.统一生成图片名
                imgUrl = Date.now()+extname
                // 3.存储
                cb(null,imgUrl)
            }
        })
        let upload = multer({storage:storage})
        return {upload,imgUrl};
    }
}

module.exports = tools