const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

const AppError = require('./util/appError');
const globalErrorHandler = require('./controllers/errorController');
const bookRouter=require('./routes/bookRoutes')
const borrowerRouter=require('./routes/borrowerRoutes')
const checkoutBookRouter=require('./routes/checkoutBookRoutes')
const returnBookRouter=require('./routes/returnBookRoutes')
const myBookRouter=require('./routes/myBookRoutes')
const overdueBookRouter=require('./routes/overdueBookRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/books', limiter);
app.use('/borrowers', limiter);


// Data sanitization against XSS
app.use(xss());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})


app.use('/books',bookRouter);
app.use('/borrowers',borrowerRouter);
app.use('/checkout_books',checkoutBookRouter);
app.use('/return_books',returnBookRouter);
app.use('/my_books',myBookRouter);
app.use('/overdue_books',overdueBookRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

  const port = process.env.EXTERNAL_PORT || 3001;
  app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
