const BlogSchema = require('../models/Blog.js')
class BlogController{
    // 获取文章详情
    async findArticles(id){
        let Blog =  await BlogSchema.find({_id:id},(res,err)=>{
            if(err){
                return '查询失败'
            }else{
                return res
            }
        })
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
            imgUrl: item.imgUrl,
            intime: item.intime,
            content: item.content
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
        let allNumber = await (await BlogSchema.find()).length
        // 计算总页数
        let totalPage = allNumber % limitaa == 0 ? allNumber / limitaa : Math.ceil(allNumber / limitaa)
        let data = await BlogSchema.find().skip(strat).limit(Number(limitaa)).exec()
        return {
            totalPage,
            data
        }
    }
    // 时间排序
    async Datafind(page){
        let strat = (Number(page)-1)*Number(15) // 开始的数据下标
        let allNumber = await (await BlogSchema.find()).length
        // 计算总页数
        let totalPage = allNumber % 15 == 0 ? allNumber / 15 : Math.ceil(allNumber / 15)
        let data = await BlogSchema.find().skip(strat).limit(Number(15)).sort({intime: -1})
        return {
            totalPage,
            data
        }
    }
}

module.exports = new BlogController()