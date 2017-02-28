const Article = require('../db/models/article')
const Category = require('../db/models/category')
const User = require('../db/models/user')

module.exports = function (app) {
    app.use('/api', require('./article'))
}
