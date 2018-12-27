//LOADER JS É O ARQUIVO DE ENTRADA DA APLICAÇÃO

//Referencia para os arquivos de configuração
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)