const express = require('express');
const router = express.Router();
const api = require('./controller/tag')
//所有路由
//其实只有后端提供数据，前端路由交给vue

router.post('/tag/create', function (req, res, next) {
    // 需要判断发的是否为空
    console.log('name'+req.body.name, req.body)
    if (req.body.id) {
      let id = req.body.id
      api.update(id, {name: req.body.name})
          .then((result) => {
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
      api.create(req.body)
          .then((result) => {
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
router.post('/tag/list/back', function (req, res, next) {
    console.log(res.body)
    let { page, limit } = req.body
    api.getList(page, limit).then((result) => {
        // 返回一个数组
        // 要是没有，是空数组？
        let tagList = result[0],
            total = result[1];
        res.status(200)
            .send({
            tagList,
            total
        })
    })
    .catch(next)
})

router.post('/tag/list/front', function (req, res, next) {
    let {page, limit} = req.body
    api.getList(page, limit)
        .then((result) => {
            let tagList = result[0],
                total = result[1],
                totalPage = Math.ceil(total / limit);
            let hasNext = totalPage > page ? 1 : 0,
                hasPrev = page > 1;

            res.status(200)
                .send({
                tagList,
                hasNext,
                hasPrev
            })
        })
})

router.post('/tag/list', function (req, res, next) {
    api.getList()
        .then((result) => {
            let tagList = result;
            res.status(200)
                .send({
                tagList
            })
        })
})

// 删除需要验证
router.post('/tag/remove', function (req, res, next) {
    let ids = req.body.id.split(',')
    console.log('routes' + ids)
    api.remove(ids)
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
router.post('/tag/edit', function (req, res, next) {
    let id = req.body.id,
        name = req.body.name;

    api.update(id, {name})
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
