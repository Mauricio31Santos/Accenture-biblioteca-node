const { Model, DataTypes } = require("sequelize");

class EnderecoModel extends Model {
    static init(sequelize){
        const model = {
            id:{
                type : DataTypes.UUIDV4,
                primaryKey: true
            },
            bairro:{
                type: DataTypes.STRING,
            },
            rua:{
                type: DataTypes.STRING,
            },
            complemento:{
                type: DataTypes.STRING,
            },
            numero:{
                type: DataTypes.INTEGER,
            },
            active: {
                type: DataTypes.BOOLEAN,
            }

        }

        super.init(model, { sequelize, tableName: 'endereco'})
    }

}