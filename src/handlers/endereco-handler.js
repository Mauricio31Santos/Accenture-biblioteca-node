const EnderecoService = require("../services/endereco-service");
const BaseHandler = require("./base-handler");


class EnderecoHandler extends BaseHandler{

    constructor(){
        super(new EnderecoService())
    }

}

module.exports = new EnderecoHandler()