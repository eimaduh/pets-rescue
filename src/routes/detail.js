const express = require('express')
const detailRouter = express.Router();
const detailController = require('../controllers/detailController');

detailRouter.get('/detail/:id', detailController.getById);

module.exports = detailRouter;