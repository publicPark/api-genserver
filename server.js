const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: "I'm good" })
})

const groupRouter = require('./routes/groups')

app.use('/data', groupRouter)

app.listen(3333, () => {
  console.log("hello 3333")
})



