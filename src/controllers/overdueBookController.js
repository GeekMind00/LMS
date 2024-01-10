const { Op } = require('sequelize'); 
const moment = require('moment'); 
const db = require('../models/index');
const catchAsync = require('./../util/catchAsync');

exports.getOverdueBooks = catchAsync(async (req, res, next) => {
        const overdue_books= await db.checkoutbook.findAll({
            where: {
                due_date: {
                  [Op.gt]: moment().toDate(),
                },
              },
            include: {
                model: db.book,
                required: true
              }
        });
        return res.status(200).json(overdue_books);   
  });