var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.logout = function (req, res) {
    delete req.session.user
}

