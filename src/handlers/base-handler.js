const CadastroService = require("../services/cadastro-service")

class BaseHandler{

    constructor(service){
        this.service = service
    }

    getAll = (req, h) => {
        return this.service.getAll()
    }

    getById = (req, h) => {
        return this.service.getById(req.params.id)
    }

    add = (req, h) => {
        return this.service.add(req.payload)
    }

    update = (req, h) => {
        return this.service.update(req.param.id, req.payload)
    }

    remove = (req, h) =>{
        return this.service.remove(req.params.id)
    }
}

module.exports = BaseHandler