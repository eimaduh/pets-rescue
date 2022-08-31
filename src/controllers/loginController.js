const bcrypt = require('bcrypt');
const database = require('../database/models')

const loginController = {

  getLoginPage: (req, res) => {
    const user = req.user;

    if (user) {
      return res.redirect('/pets');
    }

    return res.render('login', { error: ''})
  },

  postLogin: (req, res) => {
    const { username, password} = req.body

    database.User.findOne({
      where: {
        username
      },
    }).then(user => {
      if (!user) {
        return res.render('login', {
          error: 'Username or password incorrect.'
        })
      }
  
      if (!bcrypt.compareSync(password, user.password)) {
        return res.render('login', {
          error: 'Username or password incorrect.'
        })
      }
  
      req.session.username = user.username;
      
      res.redirect('/home')

      })
    },

  getRegisterPage: (req,res) => {
      return res.render('register')
  },

  create: (req, res) => {
        const {
         name,
         username,
         password
        } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);
      
        database.User.create({
         name,
         username,
         password: passwordHash
        })

        return res.redirect('/login');
        
       }

}

module.exports = loginController