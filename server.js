require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then((result) => console.log("connected to db"))
.catch((err)=> console.log(err))

app.use(express.static('public')) // public 폴더

app.set('view engine', 'ejs') // views 폴더

// ejs pages
app.get('/', (req, res) => {
  const message = `Hello!

It's good to see you!

How are you?`
  // res.status(200).json({ message })
  res.render('index', { code:message, lang:"plaintext" })
})

app.get('/secret', (req, res) => {
    const code = `I'm good!

님들아
여기 데이터는 영원함을 보장하지 않습니다
갑자기 사라질 수 있으니 주의해주세요

오른쪽 위쪽에서
New API를 눌러 
데이터를 입력하고,
Save 하시면 끝.
`
  res.render('index', { code, lang:"plaintext", showButtons:true })
})

app.get('/new', (req, res) => {
  res.render('new')
})
app.get('/new-api', (req, res) => {
  res.render('new-api')
})

// routers
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)
const documentRouter = require('./routes/document')
app.use('/document', documentRouter)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log("hello I'm " + port)
})



