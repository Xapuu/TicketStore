const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let eventSchema = mongoose.Schema({
  eventTitle: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  img: { type: String, default: 'http://lorempixel.com/400/200/' },
  author: { type: ObjectId, required: true, ref: 'User' },
  atendants: { type: [ObjectId], default: [] },
  tags: { type: [String], default: [] },
  dateCreation: { type: Date, default: Date.now() },
  eventDate: { type: Date, default: Date.now() },
  ticketCount: { type: Number, required: true },
  soldTickets: { type: Number, default: 0 },
  ticketPrice: { type: Number, required: true },
  approved:{type:Boolean,default:false},
  checked:{type:Boolean,default:false},
  priceRate:{type:Number,required:true}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
