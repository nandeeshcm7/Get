var express = require('express');
var app = express();
var mongoose = require('mongoose');

// files	
var router = require('./routes');
var jobroutes = require('./jobs');
var memberroutes = require('./members');
var upload = require('./upload');
var mailer = require('./mailer.js')


mongoose.Promise = global.Promise;

// db connection
mongoose.connect('mongodb://nandeesh:password@ds211029.mlab.com:11029/heroku_9pl516mr', function(err) {
    if(err)
{        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// useless sort of thing - router
app.use('/routes', router);
app.use('/jobs', jobroutes);
app.use('/members', memberroutes);
app.use('/mail', mailer);

app.use('/upload',upload)

app.listen(8080, function () {
	console.log('Example app running on  8080')
});
