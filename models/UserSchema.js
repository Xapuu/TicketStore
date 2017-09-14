const mongoose = require('mongoose')
const encryption = require('./../utilities/encryption')
const ObjectId = mongoose.Schema.Types.ObjectId

let UserModel = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin:{type:Boolean,default:false},
  eventsCreated: { type: [ObjectId], default: [] },
  msgFlag:{type:Boolean,default:false},
  cart: { type: [ObjectId], default: [] },
  salt: { type: String, required: true }
})

UserModel.method({
  authenticate: function (password) {
    let inputPasswordHash = encryption.hashPassword(password, this.salt)
    let isSamePasswordHash = inputPasswordHash === this.password

    return isSamePasswordHash
  }
})

const User = mongoose.model('User', UserModel)

module.exports = User
