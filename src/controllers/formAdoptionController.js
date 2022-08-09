const getInfoDatabase = require("../utils/getInfoDatabase");
const fs = require('fs') ;
const path = require('path');
const pathInfosJSON = path.join(__dirname, ".." , "database" , "dadosUser.json");

const formAdoptionController = {
    getAdoptionPage: (req, res) => {
      return res.render('form-adoption')
    },

    getAnalisePage: (req, res) => {
      return res.render('analise')
    },
  
    postAnalisePage: (req, res) => {
      const infosDB = getInfoDatabase('dadosUser')
      const {name, birthday, residence, availability, motivation} = req.body

      const infosUser = {
        name, 
        birthday, 
        residence, 
        availability : Number(availability), 
        motivation
      }

      infosDB.push(infosUser)
  
      const usersJSON = JSON.stringify(infosDB, null, " ");
  
      fs.writeFileSync(pathInfosJSON, usersJSON);
  
      res.redirect('/formulario/analise')
      
    }

  
  }
  
  module.exports = formAdoptionController