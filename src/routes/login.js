const express = require('express')
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');

loginRouter.get('/', loginController.getLoginPage);

loginRouter.get('/login', loginController.getLoginPage)

loginRouter.post('/login', loginController.postLogin);

loginRouter.get('/register', loginController.getRegisterPage)

loginRouter.post('/register', loginController.create);

module.exports = loginRouter;