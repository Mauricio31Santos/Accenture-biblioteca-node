const BaseHandler = require("./base-handler");
const LivrosService = require('../services/livros-service')


class LivrosHandler extends BaseHandler{

    constructor(){
        super(new LivrosService())
    }
    /*add = (req, h) =>{
        console.log(req.payload)

        //return req.payload
        
        return super.add(req, h)
    }*/
    
}

module.exports = new LivrosHandler()