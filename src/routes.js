const CadastroRoutes = require('./routes/cadastro-routes')
const LivrosRoutes= require('./routes/livros-routes')
const UsuarioRoutes = require('./routes/usuario-routes')

module.exports = [
    ...CadastroRoutes,
    ...LivrosRoutes,
    ...UsuarioRoutes,
]