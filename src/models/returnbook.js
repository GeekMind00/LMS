'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class returnbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      returnbook.belongsTo(models.book);
      returnbook.belongsTo(models.borrower);
    }
  }
  returnbook.init({
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'returnbook',
  });
  return returnbook;
};