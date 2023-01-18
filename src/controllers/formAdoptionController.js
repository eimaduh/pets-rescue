const database = require('../database/models')

const formAdoptionController = {
    getAdoptionPage: (req, res) => {
      return res.render('form-adoption')
    },

    create: (req, res) => {
      const {
          nome, 
          sobrenome,
          idade, 
          tempoDisponivel,
          telefone

       } = req.body;
     
       database.UserDado.create({
        nome, 
        sobrenome,
        idade, 
        tempoDisponivel,
        telefone
       })

       return res.redirect('/formulario/analise');
    },

    getAnalisePage: (req, res) => {
      return res.render('analise')
    }

  
  }
  
  module.exports = formAdoptionController