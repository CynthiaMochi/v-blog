const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CategorySchema = new Schema({
    name: String,
    articles: [{type: ObjectId, ref: 'Article'}],
},{
    timestamps: true
})

// CategorySchema.pre('save', function (next) {
//     if (this.isNew) {
//         this.meta.createAt = this.meta.updateAt = Date.now()
//     } else {
//         this.meta.updateAt = Date.now()
//     }

//     next()
// })

CategorySchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .sort({_id: -1})
            .exec(cb)
    },
    findById: function(id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    }
}

let Category = mongoose.model('Category', CategorySchema)

module.exports = Category