const Joi = require("joi");
const UsuarioHandler = require("../handlers/usuario-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/usuario',
        options: {
            handler: UsuarioHandler.getAll,
            description: 'Obtem todos os usuarios',
            notes: 'Retorna todos os usuario',
            tags: ['api','usuario'], // ADD THIS TAG
        }
    },
    {
        method: 'GET',
        path: '/api/v1/usuario/{id}',
        options: {
            handler: UsuarioHandler.getById,
            description: 'Obtem um usuario pelo id',
            notes: 'Retorna um um usuario pelo id',
            tags: ['api','usuario'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required(),
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/api/v1/usuario',
        options: {
            handler: UsuarioHandler.add,
            description: 'Obtem um usuario pelo id',
            notes: 'Retorna um um usuario pelo id',
            tags: ['api','usuario'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    usuario: Joi.string().min(3).max(50).required(),
                    senha: Joi.string().min(8).max(20).required(),
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/usuario/{id}',
        options: {
            handler: UsuarioHandler.update,
            description: 'Obtem um usuario pelo id',
            notes: 'Retorna um um usuario pelo id',
            tags: ['api','usuario'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    usuario: Joi.string().min(3).max(50).required(),
                    senha: Joi.string().min(8).max(20).required(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/usuario/{id}',
        options: {
            handler: UsuarioHandler.remove,
            description: 'Obtem um usuario pelo id',
            notes: 'Retorna um um usuario pelo id',
            tags: ['api','usuario'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
        {
            method: 'PATCH',
            path: '/api/v1/usuario/{id}',
            options: {
                handler: UsuarioHandler.changeStatus,
                description: 'Obtem um usuario pelo id',
                notes: 'Retorna um um usuario pelo id',
                tags: ['api','usuario'], // ADD THIS TAG
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