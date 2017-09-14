const mongoose = require('mongoose')
const BoxSchema = require('mongoose').model('Message').schema
const ObjectId = mongoose.Schema.Types.ObjectId

let UserBox = mongoose.Schema({
    userId:{type:ObjectId,required:true},
    notifications:{type:[BoxSchema],default:[]}
})

const Box = mongoose.model('Box',UserBox)

module.exports = Box