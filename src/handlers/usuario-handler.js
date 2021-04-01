const BaseHandler = require("./base-handler");
const UsuarioService = require('../services/usuario-service')

class UsuarioHandler extends BaseHandler{

    constructor(){
        super(new UsuarioService())
    }

}

module.exports = new UsuarioHandler()