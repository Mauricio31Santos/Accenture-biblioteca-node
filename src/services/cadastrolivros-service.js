const BaseService = require("./base-service")
const CadastrolivrosRepository = require('../repositories/cadastrolivros-repository')


class CadastrolivrosService extends BaseService {

    constructor(){
        super(new CadastrolivrosRepository())
    }
}

module.exports = CadastrolivrosService