require('dotenv').config()
const express = require('express')
require('dotenv').load();
const router = express.Router()
const sha1 = require('sha1')
const mongoose = require('mongoose')
const userApi = require('./controller/user')
const createToken = require('../middleware/createToken')
const checkToken = require('../middleware/checkToken')

router.get('/admin', checkToken, function(req, res, next) {
  // 说明token正确
  res.send({
    type: true,
    name: 'cynthia'
  })
})

router.post('/signup', function(req, res ,next) {
  console.log(req.body)
  let username = req.body.username,
      password = req.body.password;

  password = sha1(password);

  userApi.create({
    username: username,
    password: password
  })
  .then(result=> {
    console.log(result)
    if (result.err) {
      res.send({
        code: -200,
        message: result.message
      })
    } else {
      res.status(200)
        .send({
          token: createToken(username)
        })
    }
  })
  .catch(err => {
    next(err)
      res.send({
        code: -200,
        message: err.toString()
      })
  })
})

router.post('/login', function(req, res, next) {
  let username = req.body.username,
      password = req.body.password;

  password = sha1(password);

  userApi.login({
    username: username,
    password: password
  })
  .then(user => {
    console.log(user)
    if (user && user.password === password) {
      res.status(200)
        .send({token: createToken(username)})
    } else {
      res.send({
        code: -200,
        message: '用户名或密码错误'
      })
    }
  })
  .catch(err => {
    next(err)
      res.send({
        code: -200,
        message: err.toString()
      })
  })
})

module.exports = router

