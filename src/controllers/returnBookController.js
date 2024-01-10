const factory = require('./handlerFactory');
const catchAsync = require('./../util/catchAsync');
const db = require('../models/index');

exports.createReturnBook = catchAsync(async (req, res, next) => {
    const returnBook_data = {
      return_date: req.body.return_date,
      bookId: req.body.book_id,
      borrowerId: req.body.borrower_id,
    };

    const returnBook = await db.returnbook.create(returnBook_data);
    const deleted_checkoutBook = await db.checkoutbook.destroy({ where: { bookId: req.body.book_id, borrowerId: req.body.borrower_id } });

    return res.status(201).json(returnBook);
});

exports.getAllReturnBooks = factory.getAll(db.returnbook);
exports.getReturnBook = factory.getOne(db.returnbook);
exports.updateReturnBook = factory.updateOne(db.returnbook);
exports.deleteReturnBook = factory.deleteOne(db.returnbook);

