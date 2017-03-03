const mongoose = require('mongoose')
const Schema = mongoose.Schema

//就游客和博主
//timestamps自动加时间戳
let UserSchema = new Schema({
    username: {
        unique: true,
        type: String
    },
    password: String,
    avatar: String
}, {
    timestamps: true
})


let User = mongoose.model('User', UserSchema)

module.exports = User
