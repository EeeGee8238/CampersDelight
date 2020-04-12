var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var campgrounds = [
  {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
  {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
  {name: 'Jackal\' Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'},
  {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
  {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
  {name: 'Jackal\' Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'},
  {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
  {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
  {name: 'Jackal\' Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'}
]

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.render('landing')
})

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', {campgrounds})
})

app.post('/campgrounds', function(req, res) {
  campgrounds.push({name: req.body.name, image: req.body.image})
  res.redirect('/campgrounds')
})

app.get('/campgrounds/new', function(req, res) {
  res.render('new')
})


app.listen(3000, function() {
  console.log('The server is listening on port 3000...')
})
