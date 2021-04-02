const Joi = require("joi");
const CadastroHandler = require("../handlers/cadastro-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/cadastro',
        handler: CadastroHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/cadastro/{id}',
        handler: CadastroHandler.getById,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/api/v1/cadastro',
        handler: CadastroHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    nome: Joi.string().min(3).max(50).required(),
                    cpf: Joi.number().integer().min(1).max(1).required(),
                    telefone: Joi.number().integer().min(1).max(1).required(),
                    
                    
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/cadastro/{id}',
        handler: CadastroHandler.update,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    nome: Joi.string().min(3).max(50).required(),
                    cpf: Joi.number().integer().min(1).max(1).required(),
                    telefone: Joi.number().integer().min(1).max(1).required(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/cadastro/{id}',
        handler: CadastroHandler.remove,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    }
]