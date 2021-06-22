const express = require('express'); // Importa o ExpressJS do node modules
const bodyParser = require('body-parser'); // Importa o Body Parser do node modules
const cors = require('cors');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

// Criando/Invocando a API/Server Web do Express
const app = express(); // Invoca o express

// Configuração do parse do JSON
app.use(bodyParser.json({ limit: '10mb' })); // Configura o Express para converter o body em objeto JSON.
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(cors());

mongoose.connect(variables.Database.conection, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

// routers
const clienteInadimplenteRouter = require('../routes/cliente-inadimplete-router');


// Configuração das rotas
app.use('/api/cliente-inadimplentes', clienteInadimplenteRouter);


module.exports = app;
