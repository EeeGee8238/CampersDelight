var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(3000, function() {
  console.log('The server is listening on port 3000...')
})