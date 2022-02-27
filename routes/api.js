const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/jsongen", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then((res)=>{console.log(res.port)})

// 일반
router.get('/', (req, res) => {
  res.status(200).json({ message: "good" })
})

// 
router.post('/save', (req, res) => {
  const value = req.body.value
  // console.log(value)
  console.log(JSON.parse(value))
})

// 내꺼
router.get('/test', (req, res) => {
  res.status(200).json({ message: "good" })
})

module.exports = router
