const AuthHandler = require('./auth-hander')

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/login',
        config: {
            auth: false,
            handler: AuthHandler.autenticate,
            description: 'Autentica com usuario e senha',
            notes: 'Retorna um token de acesso',
            tags: ['api', 'security'], // ADD THIS TAG
        },
    }
]