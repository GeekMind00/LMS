'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkoutbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      checkoutbook.belongsTo(models.book);
      checkoutbook.belongsTo(models.borrower);
    }
  }
  checkoutbook.init({
    checkout_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'checkoutbook',
  });
  return checkoutbook;
};