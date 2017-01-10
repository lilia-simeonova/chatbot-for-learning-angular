var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
host: 'localhost:9200',
log: 'trace'
});

var fs = require('fs');

var folder = 'glossary';


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
