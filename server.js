var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
  	Speeder = require('./api/models/speederModel'),
  	bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ug-x-db'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/speederRoutes');
routes(app);

app.listen(port);

console.log('ug-x-api REST started on:' + port);