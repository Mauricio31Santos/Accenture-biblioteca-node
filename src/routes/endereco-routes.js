const Joi = require("joi");
const EnderecoHandler = require("../handlers/endereco-handler");


module.exports = [

    // GET-ALL pegar todos os endereços cadastrados no banco
    {
        method: 'GET',
        path: '/api/v1/endereco',
        options: {
            handler: EnderecoHandler.getAll,
            description: 'Obtem todos os enderecos',
            notes: 'Retorna uma lista de Enderecos',
            tags: ['api', 'endereco'], // ADD THIS TAG
        }
    },

    // GetById Pega um endereço pelo ID
    {
        method: 'GET',
        path: '/api/v1/endereco/{id}',
        options: {
            handler: EnderecoHandler.getById,
            description: 'Obtem um enderço por ID',
            notes: 'Retorna um Endereço',
            tags: ['api', 'endereco'],
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },

    // Adiciona um novo endereço
    {
        method: 'POST',
        path: '/api/v1/endereco',
        options: {
            handler: EnderecoHandler.add,
            description: 'Adiciona um novo Endereço0',
            notes: 'Retorna um Endereço recem adicionado',
            tags: ['api', 'endereco'],
            validate: {
                payload: Joi.object({
                    bairro: Joi.string().min(5).max(30).required(),
                    rua: Joi.string().min(5).max(50).required(),
                    complemento: Joi.string().min(4).max(10).required(),
                    numero: Joi.number().min(1).max(5).required(),
               })
            }
        }
    },

    //Atualiza um Endereço existente
    {
        method: 'PUT',
        path: '/api/v1/endereco/{id}',
        options: {
            handler: EnderecoHandler.update,
            description: 'Atualiza um Endereço pelo id',
            notes: 'Retorna um Endereço atualizado',
            tags: ['api','endereco'],
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                }),
                payload: Joi.object({
                    bairro: Joi.string().min(5).max(30).required(),
                    rua: Joi.string().min(5).max(50).required(),
                    complemento: Joi.string().min(4).max(10).required(),
                    numero: Joi.number().min(1).max(5).required(),
                })
            }
        }
    },

    //Remove um cadastro pelo id 
    {
        method: 'DELETE',
        path: '/api/v1/endereco/{id}',
        options: {
            handler: EnderecoHandler.remove,
            description: 'Remove um Endereço',
            notes: 'Endereço removido',
            tags: ['api', 'endereco'],
            validate: {
                params: Joi.object({
                    id: Joi.string().guid().required()
                })
            }
        }
    },

    // Inativa um Serviço 
    {
        method: 'PATCH',
        path: '/api/v1/endereco/{id}',
        options: {
            handler: EnderecoHandler.changeStatus,
            description: 'Obtem um lista de endereços inativada',
            notes: 'Retorna uma lista de endereços',
            tags: ['api','endereco'], // ADD THIS TAG
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