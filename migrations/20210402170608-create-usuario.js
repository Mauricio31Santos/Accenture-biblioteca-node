'use strict';

const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('usuario', {
      id:{
        type: Sequelize.UUID,
        allowNull: false,
        primary: true
      },

      usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      updated_at:{
        type: Sequelize.DATE, 
        allowNull: false,
        
      },
      created_at:{
        type: Sequelize.DATE, 
        allowNull: false,
        
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
