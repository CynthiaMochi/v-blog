const express = require('express');
const router = express.Router();
const articleApi = require('./controller/article')
const tagApi = require('./controller/tag')

//所有路由
//其实只有后端提供数据，前端路由交给vue

// Article
// 获取某篇文章
// 前后端有权限 区分
router.get('/article', function(req, res, next) {
    // query,params,body?
    let { id } = req.query
    articleApi.find(id)
        .then((article) => {
            if (article) {
                res.status(200)
                    .send({
                    article
                })
            } else {
                throw new Error('article not Found')
            }
        })
        .catch(next)
})

// 前后端都要获取文章，但是对于后端的请求要统一拦截
router.post('/article/create', function (req, res, next) {
    // 需要判断发的是否为空
    if(req.body.id) {
      // 编辑
        let id = req.body.id,
            {content, contentToMark, tags, title} = req.body;

        articleApi.update(id, {
          title: title,
          content: content,
          contentToMark:contentToMark,
          tags: tags
        })
        .then((result) => {
          console.log(result)
            if (result) {
                res.status(200)
                    .send({
                    message: '发布成功'
                })
            } else {
                throw new Error('发布失败')
            }
        })
        .catch(next)
    } else {
        // 创建
        articleApi.create(req.body)
            .then((result) => {
              console.log('result'+result)
                if (result) {
                    res.status(200)
                        .send({
                        message: '发布成功'
                    })
                } else {
                    throw new Error('发布失败')
                }
            })
            .catch(next)
    }

})

// 带分页获取
// 需要添加验证
router.post('/article/list/back', function (req, res, next) {

    let { page, limit } = req.body
    articleApi.getList(page, limit)
        .then((result) => {
        // 返回一个数组
        // 要是没有，是空数组？
          let articleList = result[0],
              total = result[1];
          res.status(200)
              .send({
              articleList,
              total
          })
    })
    .catch(next)
})

router.post('/article/list/front', function (req, res, next) {
  console.log(req.body)
    let {page, limit} = req.body
    articleApi.getList(page, limit)
        .then((result) => {
            let articleList = result[0],
                total = result[1],
                totalPage = Math.ceil(total / limit);
            let hasNext = totalPage > page ? 1 : 0,
                hasPrev = page > 1;

            res.status(200)
                .send({
                articleList,
                hasNext,
                hasPrev
            })
        })
})

// 前台根据标签获取文章列表
router.post('/article/tag', function (req, res, next) {
    let { tag } = req.body
    articleApi.getByTag(tag)
        .then((articleList) => {
            res.status(200)
                .send({
                articleList
            })
        })
        .catch(next);
})

// 删除需要验证
router.post('/article/remove', function (req, res, next) {
  console.log(req.body.id)
    let ids = req.body.id.split(',')
    console.log('routes' + ids)
    articleApi.remove(ids)
        .then(({result: {ok, n}}) => {

            if (ok && n > 0) {
                res.status(200)
                    .send({
                        message: '删除成功'
                    })
            } else{
                throw new Error('该文章不存在');
            }
        })
        .catch(next)
})

// 编辑完保存
// 点击编辑访问的是获取一篇文章的内容
router.post('/article/edit', function (req, res, next) {
    let id = req.body.id,
        tag = req.body.tag,
        title = req.body.title,
        content = req.body.content,
        contentToMark = req.body.contentToMark;
    articleApi.update(id, {tag, title, content, contentToMark})
        .then(({result: {ok, n}}) => {
            if (ok && n > 0) {
                res.status(200)
                    .send({
                        message: '删除成功'
                    })
            } else{
                throw new Error('该文章不存在');
            }
        })
        .catch(next)
})


module.exports = router
