//CONFIGURAÇÔES DO EXPRESS
const express = require ('express');
const cors = require('cors');
const app = express();


//IMPORTAÇÂO DAS ROTAS
const userRoutes = require('./routes/users');
const matchRoutes = require('./routes/matches');
const confirmationRoutes = require('./routes/confirmations');

//CONFIGURAÇÂO DO MIDDLEWARES GLOBAIS
app.use(cors());
app.use(express.json());

//DEFINIÇÃO DAS ROTAS BASE
app.use('/users', userRoutes);
app.use('/matches', matchRoutes);
app.use('/confirmations', confirmationRoutes);

module.exports = app;