const Joi = require("joi");
const UsuarioHandler = require("../handlers/usuario-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/usuario',
        handler: UsuarioHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/usuario/{id}',
        handler: UsuarioHandler.getById,
        options: {
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
        handler: UsuarioHandler.add,
        options: {
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
        handler: UsuarioHandler.update,
        options: {
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
        handler: UsuarioHandler.remove,
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
            path: '/api/v1/usuario/{id}',
            handler: UsuarioHandler.changeStatus,
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