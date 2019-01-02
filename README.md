# my-money-app
API e frontend de controle de gastos desenvolvido em React

# Instalação do node
1. Depois de baixar mude o diretorio da pasta do node para /opt/node

$ sudo mv node /opt/node

2. Configure as variaveis de ambiente 

$ sudo nano /etc/environments

> PATH="...:/opt/node/bin"

3. atualize

$ source /etc/environment

# Instalação do mongodb
1. Depois de baixar mude o diretorio

$ sudo mv mongo /opt/mongodb

2. Configure as variaveis de ambiente

$ sudo nano /etc/environments

> PATH="...:/opt/node/bin:/opt/mongodb/bin"

3. Crie a pasta obrigatória na raíz e dê as devidas permissões

$ sudo mkdir /data

$ sudo mkdir /data/db

4. Atualize 

$ source /etc/environment

5. Para executar digite no terminal

$ mongod

# Dependencias do backend
$ npm i --save-dev express@4.14.0 mongoose@4.7.0 body-parser@1.15.2 lodash@4.17.4 mongoose-paginate@5.0.3 express-query-int@1.0.1 node-restful@0.2.5 pm2@2.1.5

$ npm i --save-dev nodemon@1.11.0

# Executar o servidor da aplicação
$ npm run dev

ou 

$ npm run production

# Dependencias do frontend
O template AdminLTE sofreu uma atualização pequena, mas que gerou impacto no projeto, por isso é importante que as mesmas versões descritas abaixo sejam usadas.

Para que isso ocorra no final de cada comando a flag -E deve ser aplicada.

$ npm init -y

$ npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2 -E

$ npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-plugin-react-html-attrs@2.0.0 babel-plugin-transform-object-rest-spread@6.22.0 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 -E

$ npm i --save-dev extract-text-webpack-plugin@1.0.1 css-loader@0.26.1 style-loader@0.13.1 file-loader@0.9.0 -E

$ npm i --save-dev admin-lte@2.3.6 font-awesome@4.7.0 ionicons@3.0.0 -E

$ npm i --save-dev react@15.4.2 react-dom@15.4.2 react-router@3.0.2 redux@3.6.0 react-redux@4.4.6 redux-form@6.4.1 redux-multi@0.1.12 redux-promise@0.5.3 redux-thunk@2.1.0 react-redux-toastr@4.4.2 axios@0.15.3 lodash@4.17.4 -E

# Configurações de autenticação do backend

$ npm i --save bcrypt@1.0.2 jsonwebtoken@7.3.0