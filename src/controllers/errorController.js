const AppError = require('./../util/appError');

const sendErrorDev = (err, req, res) => {
      return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
      });
  };

  module.exports = (err, req, res, next) => {
    // console.log(err.stack);
  
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
 
    sendErrorDev(err, req, res);

  };