const { Sequelize } = require("sequelize")
const DbConfig = require('../database/config/postgres.json')
const dotenv = require('dotenv')
const UsuarioModel = require("./models/usuario-model")
//const CadastroModel = require("./models/cadastro-model")
//const LivrosModel = require("./models/livros-model")

dotenv.config()

const connection = new Sequelize(DbConfig[process.env.NODE_ENV])

UsuarioModel.init(connection)
//CadastroModel.init(connection)
//LivrosModel.init(connection)

//CadastroModel.associate(connection.models)
//LivrosModel.associate(connection.models)

module.exports = connection