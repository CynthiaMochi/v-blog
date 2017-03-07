const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const Tag = mongoose.model('Tag')

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
    find: function (id) {
        // 只更新第一天出现的记录，+1
        Article.update({ _id: id}, {$inc: {pv: 1}}, function (err) {
            if (err) {
                console.log(err)
            }
        })
        // 可能要添加评论功能
        return Article.findById(id)
    },

// 需要验证，带分页
// 能不能不要每次都写两种方法，把验证拦截统一？？
// page:第几页， limit：一页几个
    getList: function (page, limit, tags) {

        if (page && limit) {
            const skip = (page - 1) * limit
            // MongoDB 的 _id 生成算法中已经包含了当前的时间，推荐的按时间排序的写法。
            // modal.find({_id: {$lt: id}}, callback).limit(12)
            if (tags) {
              // 前端根据标签分类
              let tagsId = tags.split(',');

              return Promise.all([
                  Article.find({tags: {$in: tagsId}})
                        .populate('tags')
                        .sort({_id: -1})
                        .skip(skip)
                        .limit(limit)
                        .exec(),
                  Article.count({tags: {$in: tagsId}}).exec()
                ])
            } else {
              return Promise.all([
                  Article.fetch()
                          .skip(skip)
                          .limit(limit)
                          .exec(),
                  Article.count().exec()
                  ])
            }
        } else {
          return Promise.all([
              Article.fetch()
                      .exec(),
              Article.count().exec()
              ])
        }
    },

    create: function (article) {
      // tags也要保留关联的article
        let articleId = '';
        _article = new Article(article)
        return _article.save()
                  .then(articleR => {
                      articleId = articleR._id;
                      return Tag.findById(articleR.tags)
                  })
                  .then(tag => {
                      tag.articles.push(articleId)
                      return tag.save()
                  })
                  .catch(err => {
                    console.log(err)
                  })
    },

    //后期是否能创建tag
    getByTag: function (tag) {
        // {tag}的格式
        // 是根据tag的id?保存
        return Article.find({tag})
                      .sort({_id: -1})
                      .exec()
    },

    update: function (id, data) {
      // 要更新tags
      // 如果tags没有改变，就不会发tagsid
        if (data.tags) {
            // 如果tags有改变
            // 需要将老的tag里的文章id删除
            // 新的tag添加id
            return Article.findById(id)
                  .then(article => {
                      return Promise.all([
                        Tag.findById(article.tags),
                        Tag.findById(data.tags),
                        Article.update({_id: id}, {$set: data}).exec()
                      ])
                  })
                  .then(results => {
                      let oldTag = results[0],
                          newTag = results[1];
                      oldTag.articles.splice(oldTag.articles.indexOf(id), 1)
                      newTag.articles.push(id)

                      return Promise.all([
                          oldTag.save(),
                          newTag.save()
                        ])
                  })
                  .catch(err => {
                      console.log(err)
                  })
        } else {
            delete data.tags;
            return Article.update({_id: id}, {$set: data}).exec()
        }
    },
    // 可以批量删除，传入数组
     remove: function (ids) {
        // 批量删除要把tag里的article也删了
        // 根据articleId查找tag
        // tag删除articleid
        //
        let promises = ids.map(id => {
          return Article.findById(id)
                  .then(article => {
                    // http://stackoverflow.com/questions/14763721/mongoose-delete-array-element-in-document-and-save
                    // 使用document的pull和pullall来删除外键
                    return  Tag.update({_id: article.tags}, {$pull: {articles: id}})
                  })
                  .then((result) => {
                    return Article.remove({_id: id})
                                .exec()
                  })
        });

       return Promise.all(promises)
                 .catch(err => {
                    console.log(err)
                 })
    }


}
