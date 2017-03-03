const Article = require('../db/models/article')
const Tag = require('../db/models/tag')
const User = require('../db/models/user')

module.exports = function (app) {
    app.use('/api', require('./article'))
    app.use('/api', require('./tag'))
    app.use('/api', require('./user'))

}
