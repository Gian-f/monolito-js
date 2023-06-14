const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const globalResources = require('./middlewares/globalResources');
const { connect } = require("./db");
const produtoRoutes = require('./routes/produtoRoutes');
const dogRoutes = require('./routes/dogRoutes');

app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(globalResources);

// Definição das opções do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Uma simples API para testes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./app.js', './routes/*.js'],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Uso das novas rotas
app.use('/produto', produtoRoutes);
app.use('/', dogRoutes);

// Rota base
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// Configuração do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('API funcionando!');
});