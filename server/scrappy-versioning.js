var scrapy = require('node-scrapy');
var HashMap = require('hashmap');
var Glossary = require('./glossary');

var url = 'https://angular.io/docs/ts/latest/';
//var model = { title: 'h3', content: 'tr td:nth-child(2) p:first-of-type' };
var version = '.text-body';


scrapy.scrape(url, version, function(err, data) {
        if (err) {
            return console.error(err)
        } else {
            var content = data[0];
            content = content + url;
            Glossary.set('version', content);
            Glossary.save();
            console.log('success');
        }
    });