const express = require('express')
const homeRouter = express.Router();
const homeController = require('../controllers/homeController');

homeRouter.get('/home', homeController.getHomePage);

module.exports = homeRouter;