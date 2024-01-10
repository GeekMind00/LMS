const factory = require('./handlerFactory');
const db = require('../models/index');

exports.getAllCheckoutBooks = factory.getAll(db.checkoutbook);
exports.getCheckoutBook = factory.getOne(db.checkoutbook);
exports.createCheckoutBook = factory.createOne(db.checkoutbook);
exports.updateCheckoutBook = factory.updateOne(db.checkoutbook);
exports.deleteCheckoutBook = factory.deleteOne(db.checkoutbook);