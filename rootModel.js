var mongoose = require('mongoose');

var rootSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var RRoot = module.exports = mongoose.model('root', rootSchema)

module.exports.get = (callback, limit) => {
    RRoot.find(callback).limit(limit)
}