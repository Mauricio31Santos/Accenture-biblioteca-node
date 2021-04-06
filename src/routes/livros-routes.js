const Joi = require("joi")//.extend(require('@joi/date'));
const LivrosHandler = require("../handlers/livros-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/livros',
        options: {
            handler: LivrosHandler.getAll,            
            description: 'Obtem o todos os livros',
            notes: 'Retorna uma lista de livros',
            tags: ['api','livros'], // ADD THIS TAG
        }
    },
    {
        method: 'GET',
        path: '/api/v1/livros/{id}',
        options: {
            handler: LivrosHandler.getById,
            description: 'Obtem o livros pelo id',
            notes: 'Retorna um livro pelo id',
            tags: ['api','livros'], // ADD THIS TAG
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
        options: {
            handler: LivrosHandler.add,
            description: 'Adciona um novo livro',
            notes: 'Retorna uma lista de livros',
            tags: ['api','livros'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    titulo: Joi.string().min(5).max(50).required(),
                    author: Joi.string().min(3).max(50).required(),
                    //dataLocacao: Joi.date().format('YYYY-MM-DD').utc().required(),
                    cadastro_id: Joi.string().guid().required()
                    
                })
            }
        }
    },
    
    {
        method: 'PUT',
        path: '/api/v1/livros/{id}',
        options: {
            handler: LivrosHandler.update,
            description: 'Atualiza os livros pelo id',
            notes: 'Retorna uma lista de livros atualizadas',
            tags: ['api','livros'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    titulo: Joi.string().min(5).max(50).required(),
                    author: Joi.string().min(3).max(50).required(),
                    //dataLocacao: Joi.date().format('YYYY-MM-DD').utc().required(),
                    cadastro_id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/livros/{id}',
        options: {
            handler: LivrosHandler.remove,
            description: 'remove um livro pelo id',
            notes: 'Retorna uma lista de livros',
            tags: ['api','livros'], // ADD THIS TAG
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
        options: {
            handler: LivrosHandler.changeStatus,
            description: 'Obtem um lista de livros inativada',
            notes: 'Retorna uma lista de livros',
            tags: ['api','livros'], // ADD THIS TAG
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