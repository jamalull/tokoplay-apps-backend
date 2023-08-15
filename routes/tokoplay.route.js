const express = require('express');
const router = express.Router();
const {videolistController,commentlistController,commentpostController,productlistController} = require('../controllers/tokoplay.controller');

//Get all video list from DB via API
router.get('/video', videolistController);

//Get all product list from DB via API
router.get('/product', productlistController);

//Get all comment list from DB via API
router.get('/comment', commentlistController);

//Post or Send comment to DB via API
router.post('/comment', commentpostController);

module.exports = router;