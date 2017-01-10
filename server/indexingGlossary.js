var Crawler = require("crawler");
var url = require('url');
var fs = require('fs');
var htmlToText = require('html-to-text');
var fs = require('fs');

var parse5 = require('parse5');

var htmlparser = require("htmlparser");
var html = require('htmlparser-to-html');
var schedule = require('node-schedule');

var elasticsearch = require('elasticsearch');

var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [0, new schedule.Range(0, 6)];
    rule.hour = 09;
    rule.minute = 57;

var j = schedule.scheduleJob( rule, function(){
    var client = new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });


    function reIndexing(callback) {
        client.indices.delete({
            index: 'glossary'
            }, function (error, response) {
                if(error) {
                    console.log(error);
                } else {
                    callback();
                }
        });
    }


    reIndexing(function() {
        fs.readdir("glossary", (err, files) => {
            files.forEach(file => {
                var content = fs.readFileSync('glossary/' + file, 'utf8').toString();
                client.index({
                    index: 'glossary',
                    type: 'html',
                    body: {
                        title: file,
                        content: content
                    }
                }, function (error, response) {
                    if(error) {
                            console.log(error);
                    } 
                });
            });
        })
    });


});
