const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/appError');


exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const record = await Model.destroy({ where: { id: req.params.id } });

    if (!record) {
      return next(new AppError('No record found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const record = await Model.update(req.body, { returning: true, where: { id: req.params.id } });

    if (!record) {
      return next(new AppError('No record found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: record
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const record = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: record
    });
  });

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    const record = await Model.findByPk(req.params.id);
    

    if (!record) {
      return next(new AppError('No record found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: record
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    const record = await Model.findAll();

    res.status(200).json({
      status: 'success',
      data: record
    });
  });