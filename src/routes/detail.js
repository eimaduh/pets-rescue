const express = require('express')
const detailRouter = express.Router();
const detailController = require('../controllers/detailController');
const checkCookies = require('../middlewares/checkCookies');

detailRouter.get('/detail/:id', checkCookies, detailController.getById);

module.exports = detailRouter;