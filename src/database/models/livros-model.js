const { Model, DataTypes } = require("sequelize");
//const CadastroModel = require("./cadastro-model");

class LivrosModel extends Model {

    static init(sequelize) {

        const model = {
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            titulo: {
                type: DataTypes.STRING,
            },
            author: {
                type: DataTypes.STRING,
            },
            /*dataLocacao: {
                type: DataTypes.DATE,
            },*/
            //cadastro_id: {
            //    type: DataTypes.STRING,
           // },
            active: {
                type: DataTypes.BOOLEAN,
            }
        }

        super.init(model, { sequelize, tableName: 'livros' })
    }

    static associate(models){
        this.belongsTo(models.CadastroModel, { foreignKey: 'cadastro_id', as: 'cadastro' } )
    }

}

module.exports = LivrosModel