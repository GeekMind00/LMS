'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      shelf_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      available_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      indexes: [
        {
          name: 'title_index',
          using: 'BTREE',
          fields: [
            'title',
          ]
        },
        {
          name: 'author_index',
          using: 'BTREE',
          fields: [
            'author',
          ]
        },
        {
          name: 'isbn_index',
          using: 'BTREE',
          fields: [
            'isbn',
          ]
        }
      ]
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};