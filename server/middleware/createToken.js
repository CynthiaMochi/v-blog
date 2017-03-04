const jwt = require('jsonwebtoken')

module.exports = function (name) {
    const expiry = new Date()

    expiry.setDate(expiry.getDate()+7); // 有效期为7天

    const token = jwt.sign({
        name: name,
        exp: parseInt(expiry.getTime()/1000)
    }, process.env.JWT_SECRET)

    return token;
}
