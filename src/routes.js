const CadastroRoutes = require('./routes/cadastro-routes')
const CadastrolivrosRoutes= require('./routes/cadastrolivros-routes')
const UsuarioRoutes = require('./routes/usuario-routes')

module.exports = [
    ...CadastroRoutes,
    ...CadastrolivrosRoutes,
    ...UsuarioRoutes,
]