const BaseHandler = require("./base-handler");
const LivrosService = require('../services/livros-service')


class LivrosHandler extends BaseHandler{

    constructor(){
        super(new LivrosService())
    }
    add = (req, h) =>{

        return req.payload
        
    
    }
    
}

module.exports = new LivrosHandler()