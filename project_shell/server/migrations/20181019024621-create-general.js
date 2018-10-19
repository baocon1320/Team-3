'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Generals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeHours: {
        type: Sequelize.TEXT
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      storeAddress: {
        type: Sequelize.STRING
      },
      storeDescription: {
        type: Sequelize.TEXT
      },
      generalTextBody: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Generals');
  }
};