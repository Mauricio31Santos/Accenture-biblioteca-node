const LivrosModel = require("../database/models/livros-model");
const BaseRepository = require("./base-repository");

class LivrosRepository extends BaseRepository{

    constructor(){
        super(LivrosModel)
    }
   /*add = (req, h) =>{

        return req.payload
        
    
    }*/

}

module.exports = LivrosRepository