const BaseHandler = require("./base-handler");
const CadastrolivrosService = require('../services/cadastrolivros-service')


class CadastrolivrosHandler extends BaseHandler{

    constructor(){
        super(new CadastrolivrosService())
    }
    
}

module.exports = new CadastrolivrosHandler()