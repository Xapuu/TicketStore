const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


let Message = mongoose.Schema({
    dateSend:{type:Date,default:Date.now()},
    sendFromUser:{type:ObjectId,required:true, ref:'User'},
    message:{type:String,required:true}
})

const Msg = mongoose.model('Message',Message)

module.exports = Msg