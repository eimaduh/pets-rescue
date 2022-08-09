const express = require('express')
const formAdoptionRouter = express.Router();
const formAdoptionController = require('../controllers/formAdoptionController');
const checkCookies = require('../middlewares/checkCookies');

formAdoptionRouter.get('/formulario', checkCookies, formAdoptionController.getAdoptionPage);
formAdoptionRouter.get('/formulario/analise', checkCookies, formAdoptionController.getAnalisePage);

formAdoptionRouter.post('/formulario', checkCookies, formAdoptionController.postAnalisePage);

module.exports = formAdoptionRouter;