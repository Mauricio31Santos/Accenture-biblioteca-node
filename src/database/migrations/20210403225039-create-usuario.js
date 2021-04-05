'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('usuarios',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
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
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        active:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      });
  },
  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('usuarios');
  }
};
