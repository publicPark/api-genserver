const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: "good" })
})

app.listen(3333, () => {
  console.log("hello 3333")
})



