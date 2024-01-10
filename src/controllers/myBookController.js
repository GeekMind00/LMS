const catchAsync = require('./../util/catchAsync');
const db = require('../models/index');

exports.getMyBooks = catchAsync(async (req, res, next) => {
      const borrowerId= req.query.borrower_id;
  
      if(borrowerId){
        const checkoutBooks= await db.checkoutbook.findAll({ // using eager loading to get books info
        where: {
          borrowerId: borrowerId,
        },
        include: {
          model: db.book,
          required: true
        }
        });

        return res.status(200).json(checkoutBooks);
      }
      else return res.status(404).json({
        status: 'error',
        massage: "Please provide a borrower_id"
      });
  });
  