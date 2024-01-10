'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.hasMany(models.checkoutbook);
      book.hasMany(models.returnbook);
    }
  }
  book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    shelf_location: DataTypes.STRING,
    available_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};