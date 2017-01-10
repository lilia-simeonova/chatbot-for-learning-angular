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
    rule.minute = 55;

var j = schedule.scheduleJob( rule, function(){
    var client = new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
    });

    var c = new Crawler({
        maxConnections : 10,
        callback : function (error, result, $) {
            console.log('we are connected');
        }
    });

    c.queue([{
        uri: 'https://angular.io/docs/ts/latest/guide/glossary.html',
        jQuery: false,

        callback: function (error, result) {
                        if(error) {
                            console.log(error);
                            return error;
                        } else {
                            var handler = new htmlparser.DefaultHandler(function (error, dom) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    var queue = [];
                                    var sections =  [];
                                    for(var i in dom) {
                                        queue.push(dom[i]);
                                    }
                                    while(queue) {
                                        var temp = queue.shift();
                                        if(temp) {
                                            for(var i in temp['children']) {
                                                queue.push(temp['children'][i])
                                                if(temp['children'][i]['name'] === 'h2') {
                                                    var res = html(temp['children'][parseInt(i)+2]);
                                                    res = res.replace(/<[^>]*>/g, '');
                                                    fs.writeFile('./glossary/' + temp['children'][i]['attribs']['id'] + '.html', res, function(err) {
                                                        if(err) {
                                                            return console.log(err);
                                                        } else {
                                                            console.log("The files were saved!");
                                                        }
                                                    });                                              
                                                }
                                            }
                                        } else {
                                                break;
                                            }     
                                    }            
                                 }
                                    
                            });
                            var test = '<html><title>Test page</title><div><h1>Main</h1><div>blbdfjdk</div><h2>Aleluah</h2></div></html>'
                            var parser = new htmlparser.Parser(handler);
                            var p = parser.parseComplete(result.body);
                        }

                    }

}]);


});
