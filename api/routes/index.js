const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const pessoasRouter = require('./pessoasRoutes.js');
const niveisRouter = require('./niveisRoutes.js');
const turmas = require('./turmasRoutes.js');
const matriculasRoutes = require('./matriculasRoutes.js');

module.exports = app => {
    app.use(express.json());
    app.use(pessoasRouter); // Estou passando todas as rotas pessoa aqui para serem usadas
    app.use(niveisRouter);
    app.use(turmas);
    app.use(matriculasRoutes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
