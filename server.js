const express = require('express')
const path = require('path')
const app = express()
const port = 5000
// var id = require('./public/index.html')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => console.log("Server is serving in port " + port))

app.get('/post/:id/:title', (req, res) => {
  res.render('post', { post_id: req.params.id, title: req.params.title })
})
