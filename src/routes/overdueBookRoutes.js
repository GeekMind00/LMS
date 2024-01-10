const express = require('express');
const overdueBookController = require('../controllers/overdueBookController');
const router = express.Router();

router
  .route('/')
  .get(overdueBookController.getOverdueBooks)

module.exports = router;