const BaseService = require("./base-service")
const LivrosRepository = require('../repositories/livros-repository')


class LivrosService extends BaseService {

    constructor(){
        super(new LivrosRepository())
    }
}

module.exports = LivrosService