const express = require('express')
const { connect } = require('http2')
const app = express()
app.set('view engine', 'ejs') // views 폴더
app.use(express.static('public')) // public 폴더

app.get('/', (req, res) => {
  // res.status(200).json({ message: "I'm good" })
  const code = `I'm good!\nI'm healthy`
  res.render('index', { code: code })
})
app.get('/new', (req, res) => {
  res.render('new')
})

const groupRouter = require('./routes/api')

app.use('/api', groupRouter)

app.listen(3333, () => {
  console.log("hello 3333")
})



