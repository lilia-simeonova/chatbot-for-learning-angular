var scrapy = require('node-scrapy');
var HashMap = require('hashmap');
var Glossary = require('./glossary');

var url = 'https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html';
var model = { title: 'h3', content: 'tr td:nth-child(2) p:first-of-type' };


scrapy.scrape(url, model, function(err, data) {
        if (err) {
            return console.error(err)
        } else {
            var titles = data['title'];
            var contents = data['content'];
            for(var i = 2, j = 0; i < titles.length; i = i+2, j++) {
                var title = titles[i];
                var content = contents[j];
                title = title.toLowerCase();
                var link = title;
                title = "angularjs-" + title;
                //title = title.replace(/ \(|\) /g, "-");
                title = title.replace(/ /g, "-");
                link = link.replace(/ /g, "-");
                if(content) {
                    content = content.replace(/Angular 2/g, "Angular");
                    content = content +  "https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#" + link ;
                }
               // console.log(title);
            //    console.log(title, "------",content);
            //    console.log('--------------');
            //    console.log(content);
             Glossary.set(title, content);
            }
        Glossary.save();
        console.log('success');
        }
    });