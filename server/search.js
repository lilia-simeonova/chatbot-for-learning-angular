'use strict';

var es = require('elasticsearch');
var express = require('express');
var http = require('http');
http.post = require('http-post');


const bodyParser= require('body-parser');
var app = express();

var fs = require('fs');

var client = new es.Client({
  host: 'localhost:9200',
  log: 'trace'
});

var result;

exports.elasticsearch = function (question, callback) {
	client.search({
		index: "glossary",
		body: {
		 	query: {
		 		"match": {	
		 			"title": question + ".html"
	 				}
		 		} 
		}	 
		}, function (error, response) {
	 		if(error) {
	 			console.log(error);
				callback("Sorry, I have connection problems.");
	 		} else {
	 			if(response['hits']['hits'][0]) {
	 				var title = response['hits']['hits'][0]['_source']['title'];
	 				var content = response['hits']['hits'][0]['_source']['content'];
	 				var result = content;
					
	 				if(result) {
	 					console.log('my result is:', result);
	 					callback(result);
	 				} 
	 			} else {
					 callback("Sorry, try again.");
				 }
	 		}
	 });
}

var response = function (result) {
	console.log('my r is---------------------------:', result);
}
