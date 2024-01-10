'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      borrower.hasMany(models.checkoutbook);
      borrower.hasMany(models.returnbook);
    }
  }
  borrower.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    registered_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'borrower',
  });
  return borrower;
};