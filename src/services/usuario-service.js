const BaseService = require("./base-service");
const UsuarioRepository = require('../repositories/usuario-repository')

class UsuarioService extends BaseService{

    constructor(){
        super(new UsuarioRepository())
    }

}

module.exports = UsuarioService