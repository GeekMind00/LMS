const Borrower = require('../models/borrower');
const factory = require('./handlerFactory');
const db = require('../models/index');

exports.getAllBorrowers = factory.getAll(db.borrower);
exports.getBorrower = factory.getOne(db.borrower);
exports.createBorrower = factory.createOne(db.borrower);
exports.updateBorrower = factory.updateOne(db.borrower);
exports.deleteBorrower = factory.deleteOne(db.borrower);