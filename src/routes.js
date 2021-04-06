const CadastroRoutes = require('./routes/cadastro-routes')
const EnderecoRoutes = require('./routes/endereco-routes')
const LivrosRoutes= require('./routes/livros-routes')
const UsuarioRoutes = require('./routes/usuario-routes')
const AuthRoutes = require('./security/auth-routes')

module.exports = [
    ...CadastroRoutes,
    ...EnderecoRoutes,
    ...LivrosRoutes,
    ...UsuarioRoutes,
    ...AuthRoutes,
]