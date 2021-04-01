'use strict';

const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv')
const Routes = require('./routes')

dotenv.config()

class Server {

    static async init() {

        const server = Hapi.server({ port: process.env.PORT || 3000, host: 'localhost' });

        server.route(Routes)

        await server.start();

        console.log('Server running on %s', server.info.uri);
    };
}

module.exports = Server