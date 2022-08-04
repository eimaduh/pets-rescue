const express = require('express')
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const checkCookies = require('../middlewares/checkCookies');

loginRouter.get('/', checkCookies, loginController.getLoginPage);

loginRouter.get('/login', loginController.getLoginPage)

loginRouter.post('/login', loginController.postLogin);

loginRouter.get('/register', loginController.getRegisterPage)

loginRouter.post('/register', loginController.postRegister);

module.exports = loginRouter;