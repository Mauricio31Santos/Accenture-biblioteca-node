'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('endereco',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false,            
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: false
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false,
        },       
        cadastro_id:{
          type: Sequelize.UUID,
          references:{ model: 'cadastro', key:'id' },
          allowNull: false
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
    
     await queryInterface.dropTable('endereco');
  }
};
