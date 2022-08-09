const express = require('express');
const loginRouter = require('./login');
const homeRouter = require('./home');
const petsRouter = require('./pets');
const formAdoptionRouter = require('./formAdoption');
const detailRouter = require('./detail');
const routes = express.Router();


routes.use('/', loginRouter);
routes.get('/login', loginRouter);
routes.get('/regiter', loginRouter)
routes.get('/home', homeRouter);
routes.get('/pets', petsRouter);
routes.get('/detail/:id', detailRouter);
routes.get('/formulario', formAdoptionRouter);
routes.post('/formulario', formAdoptionRouter)
routes.get('/formulario/analise', formAdoptionRouter);


module.exports = routes;