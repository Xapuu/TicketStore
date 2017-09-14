const mongoose = require('mongoose')


let RateModel = mongoose.Schema({
    date:{type:Date,default:Date.now()},
    rate:{type:Number,default:0,min:0,max:100}
})

const Rate = mongoose.model('Rate',RateModel)

module.exports = Rate