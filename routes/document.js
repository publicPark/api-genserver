const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const Document = require('../models/Document')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/document", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

// 일반
router.get('/', (req, res) => {
  res.status(200).json({ message: "good" })
})

// 
router.post('/save', async (req, res) => {
  const value = req.body.value
  try {
    const document = await Document.create({ value })
    res.redirect(`/document/${document.id}`)
  } catch (err) {
    console.log(err)
    res.render("new", { value, err })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const document = await Document.findById(id)
    // res.status(500).json({ data: document.value })
    res.render("code-display", { code: document.value })
  } catch (err) {
    console.log(err)
    res.redirect("/")
  }
})

module.exports = router
