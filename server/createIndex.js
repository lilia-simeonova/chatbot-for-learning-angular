var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

var fs = require('fs');

var folder = 'exeptions';

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
  		var content = fs.readFileSync('exeptions/' + file, 'utf8').toString();
  		client.index({
			    index: 'exeptions',
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
