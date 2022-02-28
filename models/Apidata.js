const mongoose = require('mongoose')

const jsonScheme = new mongoose.Schema({
  data: {
    type: { },
    required: true
  }
})

module.exports = mongoose.model("Apidata", jsonScheme)