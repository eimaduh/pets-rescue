const database = require('../database/models')

const formAdoptionController = {
    getAdoptionPage: (req, res) => {
      return res.render('form-adoption')
    },
  
    // postAnalisePage: (req, res) => {
    //   const infosDB = getInfoDatabase('dadosUser')
    //   const {name, birthday, residence, availability, motivation} = req.body

    //   const infosUser = {
    //     name, 
    //     birthday, 
    //     residence, 
    //     availability : Number(availability), 
    //     motivation
    //   }

    //   infosDB.push(infosUser)
  
    //   const usersJSON = JSON.stringify(infosDB, null, " ");
  
    //   fs.writeFileSync(pathInfosJSON, usersJSON);
  
    //   res.redirect('/formulario/analise')
      
    // }

    postAnalisePage : (req, res) => {
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