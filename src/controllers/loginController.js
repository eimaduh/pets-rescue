const bcrypt = require('bcrypt');
const getInfoDatabase = require("../utils/getInfoDatabase");
const { v4 } = require('uuid');
const fs = require('fs') ;
const path = require('path');
const pathUsersJSON = path.join(__dirname,"..","database","users.json");

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

  postRegister: (req,res) => {
    const usersDB = getInfoDatabase('users')
      const { name, username, password } = req.body;
      const newId = v4();
  
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      const newUser = {
        id: newId,
        name,
        username,
        password: hashedPassword
      }
  
      usersDB.push(newUser)
  
      const usersJSON = JSON.stringify(usersDB, null, " ");
  
      fs.writeFileSync(pathUsersJSON, usersJSON);
  
      res.redirect('/login')
    
  }
}

module.exports = loginController