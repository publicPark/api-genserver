const express = require('express')
const router = express.Router()

// 일반
router.get('/', (req, res) => {
  res.status(200).json({ message: "good" })
})

// 내꺼
router.get('/test', (req, res) => {
  res.status(200).json({ message: "good" })
})

module.exports = router
