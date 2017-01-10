var cors = require('cors');
var search = require('./search.js');
var Promise = require('promise');
var summarize = require ("text-summary");
var elasticsearch = require('elasticsearch');
//var db = require('./db');
var db = require('./db');
var feedback = require('./feedback');
var express = require('express');

const bodyParser= require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var apiai = require('apiai');
 
var app2 = apiai("eded6047c036427c88aa698e65f17af3");
 
//var search = require('./search.js');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

app.use(cors());
var question;

app.post('/search', function (req, res) {
		var request = app2.textRequest(req.body.question, {
			sessionId: Math.round(Math.random() * 1e9).toString()
		});
		request.on('response', function(response) {
			
			var action = response['result']['action'];
			var intent = response['result']['metadata']['intentName'];
			var parameters = response['result']['parameters'];
			var numberKeyWords = Object.keys(parameters).length;
			var searchWord = parameters['basics'];
			if(action === 'search') {
				search.elasticsearch(searchWord, function(result) {
					if(result) {
						// avarage length of sentence: 17 words, avarage length of word: 6 
						// => 102 character per sentence, we consider 4 sentences for enough
						if(result.length > 407) {
							result = summarize.summary(result, 4);
						}
						result = result.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g,"- ");
						var answer = { result };
					} else {
						var answer = {"result": "I can't resolve this."};
						console.log(answer);
					}
					res.send(answer);
				  
  				})
			} else if(action === 'getName') {
						var answer = {"result": "My name is NgBot"};
						res.send(answer);
				} else {
					console.log(message);
					var message = response['result']['fulfillment']['speech'];
					if(message === '') {
						message = 'Please try again.';
					}
					var answer = {"result": message};
						res.send(answer);
					console.log(message);
				}			
		});
		request.on('error', function(error) {
		    console.log(error);
		});
 
		request.end();
});

app.post('/feedback', feedback.addFeedback);

app.get('/feedback', feedback.seeFeedback);

app.listen(4242, function () {
  console.log('Example app listening on port 4242!');
});