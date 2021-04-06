
const BaseRepository = require("./base-repository");
const EnderecoModel = require('../database/models/endereco-models')


class EnderecoRepository extends BaseRepository{

    constructor(){
        super( EnderecoModel)
    }

}

module.exports = EnderecoRepository