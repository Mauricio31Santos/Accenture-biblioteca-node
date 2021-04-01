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
                    cpf: Joi.string().min(11).max(11).required(),
                    telefone: Joi.number().integer().min(9).max(11),
                    //rever essa parte depois
                    //serie: Joi.string().min(1).max(1).required().pattern(new RegExp('^[a-zA-Z]$')),
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
                    nome: Joi.string().min(5).max(50).required(),
                    serie: Joi.string().min(1).max(1).required().pattern(new RegExp('^[a-zA-Z]$')),
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