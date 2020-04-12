var express = require('express'),
	bodyParser = require('body-parser'),
  mongoose = require('mongoose')

var app = express()


mongoose.connect('mongodb://localhost/campers_delight', { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
})

var Campground = mongoose.model('Campground', campgroundSchema)

// Campground.create(
// 	{name: 'Jackal\'s Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg', description: 'This is where Jackals have a lot of fun'}, function(err, campground) {
// 		if(err) {
// 			console.error(err)
// 		} else {
// 			console.log(`NEWLY CREATED CAMPGROUND: ${campground}`)
// 		}
// 	}
// )

app.get('/', function(req, res) {
  res.render('landing')
})

// INDEX route of RESTful routing
app.get('/campgrounds', function(req, res) {
	Campground.find({}, function(err, campgrounds) {
		if (err) {
			console.error(err)
		} else {
			res.render('index', {campgrounds})
		}
	})
})

// CREATE route of RESTful routing
app.post('/campgrounds', function(req, res) {
	Campground.create({name: req.body.name, image: req.body.image, description: req.body.description}, function(err, createdCampground) {
		if (err) {
			console.error(err)
		} else {
			console.log(`NEWLY CREATED CAMPGROUND: ${createdCampground}`)
			res.redirect('/campgrounds')
		}
	})
})

// NEW route of RESTful routing
app.get('/campgrounds/new', function(req, res) {
  res.render('new')
})

//SHOW route of RESTful routing
app.get('/campgrounds/:id', function(req, res) {
	Campground.findById(req.params.id.trim(), function(err, foundCampground) {
		if (err) {
			console.error(err)
		} else {
				res.render('show', {campground: foundCampground})
		}
	})
})


app.listen(3000, function() {
  console.log('The server is listening on port 3000...')
})

// var campgrounds = [
//   {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
//   {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
//   {name: 'Jackal\'s Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'},
//   {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
//   {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
//   {name: 'Jackal\' Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'},
//   {name: 'Trout River', image: 'https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg'},
//   {name: 'Marble Mesa', image: 'https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg'},
//   {name: 'Jackal\' Excitement', image: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'}
// ]
