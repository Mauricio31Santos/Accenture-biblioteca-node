const Joi = require("joi");
const CadastrolivrosHandler = require("../handlers/cadastrolivros-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/cadastrolivros',
        handler: CadastrolivrosHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/cadastrolivros/{id}',
        handler: CadastrolivrosHandler.getById,
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
        path: '/api/v1/cadastrolivros',
        handler: CadastrolivrosHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    livro: Joi.string().min(5).max(50).required(),
                    author: Joi.string().min(3).max(50).required()
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/cadastrolivros/{id}',
        handler: CadastrolivrosHandler.update,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    nome: Joi.string().min(5).max(50).required(),
                    idade: Joi.number().required(),
                    dataContrato: Joi.date().required()
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/cadastrolivros/{id}',
        handler: CadastrolivrosHandler.remove,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    }
]