const mongoose = require('mongoose');

const commentlistSchema = new mongoose.Schema({
  username : {
    required : true,
    type : String
  },
  comment : {
    required : true,
    type : String
  },
  timestamps : {
    required : true,
    type : Date
  },
  videoId : {
    required : true,
    type : Number
  }
});

module.exports = mongoose.model('commentlists', commentlistSchema);