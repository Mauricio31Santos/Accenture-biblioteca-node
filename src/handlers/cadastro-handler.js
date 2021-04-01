const CadastroService = require("../services/cadastro-service");
const BaseHandler = require("./base-handler");

class CadastroHandler extends BaseHandler{

    constructor(){
        super(new CadastroService())
    }
}

module.exports = new CadastroHandler()