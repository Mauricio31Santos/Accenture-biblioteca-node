const { Model, DataTypes } = require("sequelize");

class UsuarioModel extends Model{

    static init(sequelize){

        const model = {
            id:{
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            usuario:{
                type: DataTypes.STRING
            },
            senha:{
                type: DataTypes.STRING
            },
            active:{
                type: DataTypes.BOOLEAN
            }   
        }
        super.init(model, { sequelize , tableName: 'usuarios'})
    }
}

module.exports = UsuarioModel