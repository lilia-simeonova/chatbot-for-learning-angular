require('mongoose').model('Feedback');

var mongoose = require('mongoose');
var Feedback = mongoose.model('Feedback');
console.log('feedback file opened');
module.exports = {
  addFeedback: function (req, res) {
    var session = req.body;
    new Feedback({ 
          id: session.id, 
          questions: session.questions, 
          answers: session.answers, 
          feeling: session.feeling 
      })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('feedback saved');
          res.end();
        }
      });
  },
  seeFeedback: function (req, res, next) {
    Feedback.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('feedback:', docs[i]);
        }
        res.end(JSON.stringify(docs));
      }
    });
  }
}