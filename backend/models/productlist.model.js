const mongoose = require('mongoose');

const productlistSchema = new mongoose.Schema({
  productId : {
    required : true,
    type : Number
  },
  linkProduct : {
    required : true,
    type : String
  },
  title : {
    required : true,
    type : String
  },
  price : {
    required : true,
    type : Number
  },
  videoId : {
    required : true,
    type : Number
  }
});

module.exports = mongoose.model('productlists', productlistSchema);