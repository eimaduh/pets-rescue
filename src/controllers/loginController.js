const bcrypt = require('bcrypt');
const getInfoDatabase = require("../utils/getInfoDatabase");
const { v4 } = require('uuid');
const fs = require('fs') ;
const path = require('path');
const pathUsersJSON = path.join(__dirname,"..","database","users.json");

const database = require('../database/models')

const loginController = {
  getLoginPage: (req, res) => {
    const user = req.user;

    if (user) {
      return res.redirect('/home');
    }

    return res.render('login', { error: ''})
  },
  postLogin: (req, res) => {
    const { username, password, remember } = req.body
    const hasToRemember = !!remember;

    const usersBD = getInfoDatabase('users')
    
    const user = usersBD.find(user => user.username === username)
  
    if (!user) {
      return res.render('login', {
        error: 'Nome ou senha incorreto.'
      })
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.render('login', {
        error: 'Nome ou senha incorreto.'
      })
    }

    req.session.username = user.username;
    
    if (hasToRemember) {
      res.cookie('user', user.username, { maxAge: 86400000 });
    }
    
    res.redirect('/home')
  },

  getRegisterPage: (req,res) => {
      return res.render('register')
  },

  postRegister: (req, res) => {
        const {
         name,
         username,
         password,
        } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);
      
        database.User.create({
         name,
         username,
         password: passwordHash,
        })
         .then(() => {
          return res.redirect('/login');
         })
         .catch(error => res.send(error))
       }

}

module.exports = loginController