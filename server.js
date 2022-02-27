const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.set('view engine', 'ejs') // views 폴더
app.use(express.static('public')) // public 폴더
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
갑자기 사라질 수 있음 주의

오른쪽 위쪽을 보세요
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


app.listen(3333, () => {
  console.log("hello 3333")
})



