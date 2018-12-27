# my-money-app
API e frontend de controle de gastos desenvolvido em React

# Instalação do node
1. Depois de baixar mude o diretorio da pasta do node para /opt/node

> sudo mv node /opt/node

2. Configure as variaveis de ambiente 

> sudo nano /etc/environments

PATH="...:/opt/node/bin"

3. atualize

> source /etc/environment

# Instalação do mongodb
1. Depois de baixar mude o diretorio

> sudo mv mongo /opt/mongodb

2. Configure as variaveis de ambiente

> sudo mv mongo /opt/mongodb

3. Crie a pasta obrigatória na raíz e dê as devidas permissões

> sudo mkdir /data

> sudo mkdir /data/db

4. Atualize 

> source /etc/environment

5. Para executar digite no terminal

> mongod

# Dependencias do backend
npm i --save-dev express@4.14.0 mongoose@4.7.0 body-parser@1.15.2 lodash@4.17.4 mongoose-paginate@5.0.3 express-query-int@1.0.1 node-restful@0.2.5 pm2@2.1.5

npm i --save-dev nodemon@1.11.0

# Executar o mongodb para iniciar o banco de dados
> mongod

# Executar o servidor
> npm run dev