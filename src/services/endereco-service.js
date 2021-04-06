const BaseService = require('./base-service')
const EnderecoRepository = require('../repositories/endereco-repository')

class EnderecoService extends BaseService{

    constructor(){
        super(new EnderecoRepository)
    }
    async getById(id){
        return await super.getById(id, ['endereco'])
    }

}

module.exports = EnderecoService