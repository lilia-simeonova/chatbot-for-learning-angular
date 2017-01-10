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


exports.elasticsearch = function (question, callback) {
	client.search({
        index: 'glossary',
        scroll: '30s',
		body: {
		 	query: {
		 		"match": {	
		 			"title": "kebab-case" + '.html'
	 				}
		 		} 
		 	} 	 
		}, function (error, response) {
	 		if(error) {
	 			console.log(error);
	 		} else {
                 //console.log(response);
	 			if(response['hits']['hits']) {
                    for(var i = 0; i < response['hits']['hits'].length; i++) {
                        var title = response['hits']['hits'][i]['_source']['title'];
                      console.log(title);
                    }
	 			} else {
					 
				 }
	 		}
	 });
}

var response = function (result) {
	console.log('my r is---------------------------:', result);
}


exports.elasticsearch("var");