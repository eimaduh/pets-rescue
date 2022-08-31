const express = require('express')
const petsRouter = express.Router();
const petsController = require('../controllers/petsController');

petsRouter.get('/pets', petsController.getPetsPage);

module.exports = petsRouter;