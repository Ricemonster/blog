const { model,Schema } = require('mongoose');
const BlogSchema = new Schema({
    // 文章标题
    title: {
        type: String,
        required: true
    },
    // 文章创建时间
    intime:{
        type: String,
        default: Date.now
    },
    // 封面图
    imgUrl:{
        type: String,
        default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606325905224&di=3a003a7a86f08dc93f3297b35672f2ff&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1709%2F04%2Fc4%2F57955248_1504485171159.jpg'
    },
    // 文章内容
    content:{
        type: String,
        required: true
    },
    // 文章分类 - 作为外键
    category:{
        type: Schema.Types.ObjectId, ref: 'Category'
    },
    // 是否发布
    published:{
        type: Boolean,
        default: false
    }
})
module.exports = model('Blog',BlogSchema)