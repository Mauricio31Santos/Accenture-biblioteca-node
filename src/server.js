'use strict';

const dotenv = require('dotenv')
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger');
const Routes = require('./routes')
const DbConnection = require('./database')
const Pack = require('../package');
const HapiJwt = require('hapi-auth-jwt2');
const JwtAuthStrategy = require('./security/jwt-auth-strategy');

dotenv.config()

class Server {

    static async init() {

        const server = Hapi.server({ port: process.env.PORT || 3000, host: 'localhost' });

        const swaggerOptions = {
            info: {
                title: 'Times API Documentação',
                version: Pack.version,
            },
            tags: [
                {
                  name: 'cadastro',
                  description: 'CRUD de cadastro'
                },
                {
                    name: 'livros',
                    description: 'CRUD de livros'
                },
                {
                    name: 'usuario',
                    description: 'CRUD de usuario'
                },
            ],
            grouping: 'tags',
        };

        await server.register([
            Inert,
            Vision,
            HapiJwt,
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            }
        ]);

        await JwtAuthStrategy.register(server)

        server.route(Routes)

        await server.start();

        console.log('Server running on %s', server.info.uri);
    };
}

module.exports = Server