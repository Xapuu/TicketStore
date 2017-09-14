const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = config => {
  mongoose.connect(config.connectionString)

  let database = mongoose.connection
  database.once('open', error => {
    if (error) {
      console.log(error)
      return
    }

    console.log('MongoDB ready!')
  })

  require('./../models/UserSchema')
  require('./../models/EventSchema')
  require('./../models/PriceRateSchema')
  require('./../models/MessageSchema')  
  require('./../models/BoxSchema')
}
