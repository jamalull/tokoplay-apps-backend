const Commentlist = require('../models/commentlist.model');
const Videolist = require('../models/videolist.model');
const Productlist = require('../models/productlist.model');

const videolistController = async(req,res) => {
  try {
    const videoList = await Videolist.find();
    
    if(videoList == null) {
      throw {
        type : "data-not-found",
        message : "Cannot get video list",
      };
    }

    res.json(videoList);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const productlistController = async(req,res) => {
  try {
    const productList = await Productlist.find();
    
    if(productList == null) {
      throw {
        type : "data-not-found",
        message : "Cannot get product list",
      };
    }

    res.json(productList);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const commentlistController = async(req,res) => {
  try {
    const commentList = await Commentlist.find();
    
    if(commentList == null) {
      throw {
        type : "data-not-found",
        message : "Cannot get comment list",
      };
    }

    res.json(commentList);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const commentpostController = async(req,res) => {
  const comment = new Commentlist({
    username : req.body.username,
    comment : req.body.comment,
    timestamps : new Date(),
    videoId : req.body.videoId
  })

  try {
    const commentToSave = await comment.save();
    res.status(200).json(commentToSave);
  }
  catch (error) {
    res.status(400).json({message : error.message})
  }
};

module.exports = {videolistController,commentlistController,commentpostController,productlistController};