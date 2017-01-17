var scrapy = require('node-scrapy');
var HashMap = require('hashmap');
var schedule = require('node-schedule');
var Glossary = require('./glossary');
var schedule = require('node-schedule');

var url = 'https://angular.io/docs/ts/latest/guide/glossary.html';
var model = { title: 'h2', content: '.l-sub-section' };

var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [0, new schedule.Range(0, 6)];
    rule.hour = 09;
    rule.minute = 57;

// var j = schedule.scheduleJob( rule, function(){
//     scrapy.scrape(url, model, function(err, data) {
//         if (err) {
//             return console.error(err)
//         } else {
//             var titles = data['title'];
//             var contents = data['content'];
//             for(var i = 0; i < titles.length; i++) {
//                 Glossary.set(titles[i].toLowerCase(), contents[i]);
//             }
//             Glossary.save();
//         }
//     });
// })

scrapy.scrape(url, model, function(err, data) {
        if (err) {
            return console.error(err)
        } else {
            var titles = data['title'];
            var contents = data['content'];
            for(var i = 0; i < titles.length; i++) {
                var title = titles[i];
                title = title.toLowerCase();
                title = title.replace(/ \(|\) /g, "-");
                title = title.replace(/ /g, "-");
                title = title.replace(/-\|-/g, "-");
                console.log(title);
                Glossary.set(title, contents[i]);
            }
            Glossary.save();
            console.log('success');
        }
    });