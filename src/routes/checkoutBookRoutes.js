const express = require('express');
const checkoutBookController = require('../controllers/checkoutBookController');
const router = express.Router();

router
  .route('/')
  .get(checkoutBookController.getAllCheckoutBooks)
  .post(checkoutBookController.createCheckoutBook)

router
  .route('/:id')
  .get(checkoutBookController.getCheckoutBook)
  .put(checkoutBookController.updateCheckoutBook)
  .delete(checkoutBookController.deleteCheckoutBook);


module.exports = router;