const express = require('express');
const borrowerController = require('../controllers/borrowerController');
const router = express.Router();

router
  .route('/')
  .get(borrowerController.getAllBorrowers)
  .post(borrowerController.createBorrower)

router
  .route('/:id')
  .get(borrowerController.getBorrower)
  .put(borrowerController.updateBorrower)
  .delete(borrowerController.deleteBorrower);


module.exports = router;