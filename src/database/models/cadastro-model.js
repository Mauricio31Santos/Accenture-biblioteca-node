const { Model, DataTypes } = require("sequelize");
const LivrosModel = require("./livros-model");

class CadastroModel extends Model{

    static init(sequelize){

        const model = {
            id:{
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            nome:{
                type: DataTypes.STRING,
            },
            cpf:{
                type: DataTypes.STRING,
            },
            telefone:{
                type: DataTypes.STRING,
            },
            
            active:{
                type: DataTypes.BOOLEAN,
            }
        }

        super.init(model, { sequelize, tableName: 'cadastro'})
    }

    static associate(models){
        
       // this.hasMany(models.livrosModel, { foreignKey: 'cadastro_id', as:'livros'})
        }
}

module.exports = CadastroModel