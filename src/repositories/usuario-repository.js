const UsuarioModel = require("../database/models/usuario-model");
const BaseRepository = require("./base-repository");

class UsuarioRepository extends BaseRepository{

    constructor(){
        super(UsuarioModel)
    }
}

module.exports = UsuarioRepository