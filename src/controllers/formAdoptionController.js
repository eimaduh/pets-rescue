const database = require('../database/models')

const formAdoptionController = {
    getAdoptionPage: (req, res) => {
      return res.render('form-adoption')
    },

    create: (req, res) => {
      const {
          name, 
          birthday, 
          residence, 
          availability, 
          motivation
       } = req.body;
     
       database.DadoUser.create({
          name, 
          birthday, 
          residence, 
          availability, 
          motivation
       })

       return res.redirect('/formulario/analise');
    },

    getAnalisePage: (req, res) => {
      return res.render('analise')
    }

  
  }
  
  module.exports = formAdoptionController