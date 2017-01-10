var mongoose = require('mongoose');  
var Feedback = new mongoose.Schema({
	id: Number,
	questions: [String],
  	responses: [String],
  	feeling: String
});

mongoose.model('Feedback', Feedback);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected');