const UsuarioModel = require("../database/models/usuario-model");
const BaseRepository = require("./base-repository");

class UsuarioRepository extends BaseRepository{

    constructor(){
        super(UsuarioModel)
    }
    async getByUsername(usuario){
        return await UsuarioModel.findOne({ where: { usuario }})
    }
}

module.exports = UsuarioRepository