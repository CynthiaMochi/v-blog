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
        ref: 'Tag'
    }
}, {
    timestamps: true
})

ArticleSchema.statics = {
    // 不知道能不能写一半
    fetch() {
        return this
            .find()
            .populate('tags')
            .sort({_id: -1})
    },

    findById(id) {
        return this
            .findOne({_id: id})
            .populate('tags')
            .exec();
    }
}

let Article = mongoose.model('Article', ArticleSchema)

module.exports = Article

