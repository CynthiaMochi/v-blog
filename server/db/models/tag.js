const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const TagSchema = new Schema({
    name: String,
    articles: [{type: ObjectId, ref: 'Article'}],
},{
    timestamps: true
})

// TagSchema.pre('save', function (next) {
//     if (this.isNew) {
//         this.meta.createAt = this.meta.updateAt = Date.now()
//     } else {
//         this.meta.updateAt = Date.now()
//     }

//     next()
// })

TagSchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .sort({_id: -1})
    },
    findById: function(id) {
        return this
            .findOne({_id: id})
            .exec()
    }
}

let Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag
