const express = require('express')
const detailRouter = express.Router();
const detailController = require('../controllers/detailController');
const checkCookies = require('../middlewares/checkCookies');

detailRouter.get('/detail', checkCookies, detailController.getDetailPage);
// detailRouter.get('/detail/:id', checkCookies, detailController.getDetailPage);

module.exports = detailRouter;