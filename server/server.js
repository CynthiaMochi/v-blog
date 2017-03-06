const path = require('path')
const express = require('express')
const cors = require('cors');
//const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
const dbUrl = 'mongodb://localhost/vblog'

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())

require('./routes')(app)

app.set('port', (process.env.port || 3000))
app.listen(app.get('port'), function () {
    console.log('listening on http://localhost:' + app.get('port'))
})
