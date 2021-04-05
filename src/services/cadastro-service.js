const BaseService = require('./base-service')
const CadastroRepository = require("../repositories/cadastro-repository")

class CadastroService extends BaseService{
    
    constructor(){
        super(new CadastroRepository())
    }
}

module.exports = CadastroService