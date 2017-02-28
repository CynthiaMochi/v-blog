//后台
//创建文章
//修改文章
//前台
//获取文章列表
//文章详情页
//根据tag筛选
const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const Category = mongoose.model('Category')

// 在路由中写回调，操作获得的数据

// 创建文章
// 对数据库做更改
// 重定向回什么页面
// exports.new = function (req, res) {

// }

//文章详情
// pv是page view页面刷新和点击量统计
// 根据id找到一篇文章，发出去


module.exports = {
    find:function (id) {
        // 只更新第一天出现的记录，+1
        Article.update({ _id: id}, {$inc: {pv: 1}}, function (err) {
            if (err) {
                console.log(err)
            }
        })
        // 可能要添加评论功能
        return Article.findById(id)
                        .exec()
    },

// 需要验证，带分页
// 能不能不要每次都写两种方法，把验证拦截统一？？
// page:第几页， limit：一页几个
    getLists:function (page, limit) {

        if (page && limit) {
            const skip = (page - 1) * limit
            // MongoDB 的 _id 生成算法中已经包含了当前的时间，推荐的按时间排序的写法。
            // modal.find({_id: {$lt: id}}, callback).limit(12)
            return Promise.all([
                Article.fetch()
                        .skip(skip)
                        .limit(limit)
                        .exec(),
                Article.count().exec()
                ])
        } else {
            return Article.fetch()
                            .exec()
        }
    },

    create:function (article) {
        _article = new Article(article)

        return _article.save()
    },

    //后期是否能创建tag
    getByTag:function (tag) {
        // {tag}的格式
        // 是根据tag的id?保存
        return Article.find({tag})
                        .sort({_id: -1})
                        .exec()
    },

    update:function (id, data) {
        return Article.update({_id: id}, {$set: data}).exec()
    },
    // 可以批量删除，传入数组
     remove:function (ids) {
        return Article.remove({_id: {$in: ids}}).exec()
    }

}
