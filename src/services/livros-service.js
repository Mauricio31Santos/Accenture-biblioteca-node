const BaseService = require("./base-service")
const LivrosRepository = require('../repositories/livros-repository')


class LivrosService extends BaseService {

    constructor(){
        super(new LivrosRepository())
    }
    async getById(id){
        return await super.getById(id, ['cadastro'])
    }
}

module.exports = LivrosService