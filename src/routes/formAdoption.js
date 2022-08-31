const express = require('express')
const formAdoptionRouter = express.Router();
const formAdoptionController = require('../controllers/formAdoptionController');

formAdoptionRouter.get('/formulario', formAdoptionController.getAdoptionPage);
formAdoptionRouter.get('/formulario/analise', formAdoptionController.getAnalisePage);

formAdoptionRouter.post('/formulario', formAdoptionController.create);

module.exports = formAdoptionRouter;