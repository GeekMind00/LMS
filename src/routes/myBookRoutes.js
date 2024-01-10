const express = require('express');
const myBookController = require('../controllers/myBookController');
const router = express.Router();

router
  .route('/')
  .get(myBookController.getMyBooks)


module.exports = router;