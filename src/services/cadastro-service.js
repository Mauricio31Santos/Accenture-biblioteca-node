const BaseService = require('./base-service')
const CadastroRepository = require("../repositories/cadastro-repository")

class CadastroService extends BaseService{
    
    constructor(){
        super(new CadastroRepository())
    }
    async getById(id){
        return await super.getById(id, ['livros'])
    }
}

module.exports = CadastroService