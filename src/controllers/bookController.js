const factory = require('./handlerFactory');
const catchAsync = require('./../util/catchAsync');
const db = require('../models/index');

exports.getAllBooks = catchAsync(async (req, res, next) => {

    const title= req.query.title;
    const author=req.query.author;
    const isbn=req.query.isbn;

    if(title && author && isbn){
       const books = await db.book.findAll({
      where: {
        title: title,
        author: author,
        isbn: isbn
        }
      });
      return res.status(200).json(books);
    }
    else if(title)
    {
      const book = await db.book.findAll({ where: { title: title } });
      return res.status(200).json(book);
    }
    else if(author){
      const books = await db.book.findAll({ where: { author: author } });
      return res.status(200).json(books);
    }
    else if(isbn){
      const book = await db.book.findOne({ where: { isbn: isbn } });
      return res.status(200).json(book);
    }
    else {
      const books = await db.book.findAll();
  
      return res.status(200).json(books);
    }
});

exports.getBook = factory.getOne(db.book);
exports.createBook = factory.createOne(db.book);
exports.updateBook = factory.updateOne(db.book);
exports.deleteBook = factory.deleteOne(db.book);