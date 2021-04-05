const Joi = require("joi")//.extend(require('joi-cpf'));
const CadastroHandler = require("../handlers/cadastro-handler");

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/cadastro',
        options: {
        handler: CadastroHandler.getAll,
        description: 'Obtem o todos os cadastro',
        notes: 'Retorna uma lista de cadastro',
        tags: ['api','cadastro'], // ADD THIS TAG
        }
    },
    {
        method: 'GET',
        path: '/api/v1/cadastro/{id}',
        options: {
        handler: CadastroHandler.getById,
        description: 'Obtem o cadastro por id',
        notes: 'Retorna um de cadastro',
        tags: ['api','cadastro'], // ADD THIS TAG
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
        options: {
            handler: CadastroHandler.add,
            description: 'Adiciona um cadastro cadastro',
            notes: 'Mostra o novo cadastro',
            tags: ['api','cadastro'], // ADD THIS TAG
            validate: {
                payload: Joi.object({
                    nome: Joi.string().min(3).max(50).required(),
                    cpf: Joi.string().min(11).max(11).required(),
                    //cpf: Joi.document().cpf().required(),
                    telefone: Joi.string().min(11).max(11).required(),
                                   
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/cadastro/{id}',
        options: {
            handler: CadastroHandler.update,
            description: 'Atualiza um cadastro',
            notes: 'Retorna uma lista de atualizada cadastro',
            tags: ['api','cadastro'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    nome: Joi.string().min(3).max(50).required(),
                    cpf: Joi.string().min(11).max(11).required(),
                    //cpf: Joi.document().cpf().required(),
                    telefone: Joi.string().min(11).max(11).required(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/cadastro/{id}',
        options: {
            handler: CadastroHandler.remove,
            description: 'Deleta um cadastro pelo id',
            notes: 'Retorna uma lista de cadastro',
            tags: ['api','cadastro'], // ADD THIS TAG
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },
    {
        method: 'PATCH',
        path: '/api/v1/cadastro/{id}',
        options: {
            handler: CadastroHandler.changeStatus,
            description: 'inativa um cadastro pelo id',
            notes: 'Retorna a entidade cadastro inativada',
            tags: ['api','cadastro'], // ADD THIS TAG
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