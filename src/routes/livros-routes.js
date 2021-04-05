const Joi = require("joi").extend(require('@joi/date'));
const LivrosHandler = require("../handlers/livros-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/livros',
        handler: LivrosHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/livros/{id}',
        handler: LivrosHandler.getById,
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
        path: '/api/v1/livros',
        handler: LivrosHandler.add,
        options: {
            validate: {
                payload: Joi.object({
                    livro: Joi.string().min(5).max(50).required(),
                    author: Joi.string().min(3).max(50).required(),
                    dataLocacao: Joi.date().format('YYYY-MM-DD').utc().required(),
                    cadastro_id: Joi.string().guid().required()
                    
                })
            }
        }
    },
    
    {
        method: 'PUT',
        path: '/api/v1/livros/{id}',
        handler: LivrosHandler.update,
        
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    livro: Joi.string().min(5).max(50).required(),
                    author: Joi.string().min(3).max(50).required(),
                    dataLocacao: Joi.date().format('YYYY-MM-DD').utc().required(),
                    cadastro_id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/livros/{id}',
        handler: LivrosHandler.remove,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'PATCH',
        path: '/api/v1/livros/{id}',
        handler: LivrosHandler.changeStatus,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    active: Joi.boolean().required()
                })
            }
        }
    }
]