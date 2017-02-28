const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let ArticleSchema = new Schema({
    title: String,
    author: String,
    content: String,
    contentToMark: String,
    pv: {
        type: Number,
        default: 0
    },
    tags: {
        type: ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
})

ArticleSchema.statics = {
    // 不知道能不能写一半
    fetch() {
        return this
            .find()
            .sort({_id: -1})
    },

    findById(id) {
        return this
            .findOne({_id: id})
            .exec();
    }
}

let Article = mongoose.model('Article', ArticleSchema)

module.exports = Article

