'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'checkoutbooks', // name of Source model
      'bookId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'books', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      return queryInterface.addColumn(
        'checkoutbooks', // name of Target model
        'borrowerId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'borrowers', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.removeColumn(
    'checkoutbooks', // name of Source model
    'bookId' // key we want to remove
  )
  .then(() => {
      return queryInterface.removeColumn(
        'checkoutbooks', // name of the Target model
        'borrowerId' // key we want to remove
      );
    });

  }
};
