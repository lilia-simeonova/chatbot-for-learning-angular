var scrapy = require('node-scrapy');
var HashMap = require('hashmap');

var url = 'https://angular.io/about/';
var model = { title: '.bio-card-name', content: '.bio-card-content' };


scrapy.scrape(url, model, function(err, data) {
        if (err) {
            return console.error(err)
        } else {
            var titles = data['title'];
            var contents = data['content'];
            for(var i = 0; i < titles.length; i++) {
                var title = titles[i];
                // title = title.toLowerCase();
                // title = title.replace(/ \(|\) /g, "-");
                // title = title.replace(/ /g, "-");
                // title = title.replace(/-\|-/g, "-");
                console.log(title, contents[i]);
                console.log('--------------');
                //Glossary.set(title, contents[i]);
            }
           // Glossary.save();
            console.log('success');
        }
    });