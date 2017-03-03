const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    console.log(req.headers['authorization']);
    let token = req.headers['authorization'].split(' ')[1]

    let decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (token && decoded.exp <= Date.now() / 1000) {
        return res.status(401)
                  .send({
                    message: '授权已经过去，请重新登录'
                  })
    }

    next();
}
