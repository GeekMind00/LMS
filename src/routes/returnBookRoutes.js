const express = require('express');
const returnBookController = require('../controllers/returnBookController');
const router = express.Router();

router
  .route('/')
  .get(returnBookController.getAllReturnBooks)
  .post(returnBookController.createReturnBook)

router
  .route('/:id')
  .get(returnBookController.getReturnBook)
  .put(returnBookController.updateReturnBook)
  .delete(returnBookController.deleteReturnBook);


module.exports = router;