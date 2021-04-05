'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('livros',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
        },
        livros: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
          
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_locacao: {
          type: Sequelize.DATE,
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
    
     await queryInterface.dropTable('livros');
  }
};
