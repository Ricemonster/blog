const BlogSchema = require('../models/Blog.js')
class BlogController{
    async index(){
        let Blog =  await BlogSchema.find((res,err)=>{
            if(err){
                return '查询失败'
            }else{
                return res
            }
        })
        // 返回的是 promise
        return Blog
    }
    async UpdateArticles(id){
        // 利用_id来查询
        let res = await BlogSchema.findByIdAndUpdate({_id:id},{$set:{state:0}},(res,err)=>{
            if(err) return'数据库发生错误';
            else if(!res) return'未查找到相关数据';
            else if(data) return {state:0,res}
        })
        return res
    }
    async AddArticles(item){
        let articles = new BlogSchema({
            title: item.title, 
            imgUrl: item.imgUrl
        })
        let resa = await articles.save()
        return resa
    }
    // 删除一篇文章 - 查询_id
    async Deleteblog(id) {
        let success = await BlogSchema.deleteOne({_id:id},function(err){
            if(err){}else{

            }
            if(err) return "数据删除发生错误"
            else return "数据删除成功"
        })
        return success
    }
    async getList(page,limit){
        let allPage = await (await BlogSchema.find()).length
        if((allPage / limit)<1){
            allPage = 1
        }else{
            allPage = allPage / limit
        }
        console.log(allPage)
        // let res = await BlogSchema.find()
        // .sort({add_time:-1}) //按数据排序
        // .skip((page-1)*limit)
        // .limit(limit) //若最后一页剩余文章数不足limit个数时，只显示剩余的，不会报错。
        // .exec(function(err, ret){
        //     return (err,ret)
        // })
        // skip的第一个参数是跳过多少数据 比如第一页的20个数据
        let res = await BlogSchema.find().sort({add_time:-1}).skip((page-1)*limit)
        return res
    }

}

module.exports = new BlogController()