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
    async getList(page,limitaa){
        let strat = (Number(page)-1)*Number(limitaa) // 开始的数据下标
        let all = await (await BlogSchema.find()).length
        let res = await BlogSchema.find().skip(strat).limit(Number(limitaa)).exec()
        return {
            all,
            res
        }
    }

}

module.exports = new BlogController()