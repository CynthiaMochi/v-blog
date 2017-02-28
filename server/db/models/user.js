const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sha1 = require('sha1')

//就游客和博主
//timestamps自动加时间戳
let UserSchema = new Schema({
    name: {
        unique: true,
        type: String
    },
    password: String,
    avatar: String
}, {
    timestamps: true
})

UserSchema.pre('save', function (next) {
    let user = this

    user.password = sha1(user.password)
})
UserSchema.statics = {
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    }
}

let User = mongoose.model('User', UserSchema)

module.exports = User