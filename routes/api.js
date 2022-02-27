const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const Apidata = require('../models/Apidata')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/document", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

/* 
Example request

curl https://um...
*/
router.get('/', (req, res) => {
  const code = `Example response

{
  "data": {
    "groupList": [
      {
        "title": "색상",
        "options": [
            "빨강",
            "노랑"
        ]
      },
      {
        "title": "사이즈",
        "options": [
            "스몰",
            "라지",
            "뭐지"
        ]
      }
    ],
    "countList": [
      {
        "combination": [
            "빨강",
            "스몰"
        ],
        "remainCount": 0
      },
      {
        "combination": [
            "빨강",
            "라지"
        ],
        "remainCount": 0
      },
      ...
    ],
  }
}
`
  res.render('index', { code, lang:"json" })
})

// 
router.post('/save', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const value = req.body.value
  let data;
  try {
    data = JSON.parse(value)
  } catch (err) {
    data = value
  }
  
  try {
    const result = await Apidata.create({ data })
    res.redirect(`/api/${result.id}`)
  } catch (err) {
    console.log(err)
    // 이건 다른데서도 쓸거라서 이렇게 응답합니다.
    res.status(500).json({ error: "failed. call me." })
  }
})

router.get('/:id', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const id = req.params.id
  try {
    const result = await Apidata.findById(id)
    res.status(200).json({ data: result.data })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "failed. call me." });
  }
})

module.exports = router
